import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextArea from '../../components/TextArea';
import ProductMediaImg from '../../assets/product-media-icon.png';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { UserAuth } from '../../config/AuthContext';

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '0',
      stock: '0',
      productMedia: {
        file1: null,
        file2: null,
        file3: null,
        file4: null,
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required').min(0, 'Price must be a positive number'),
      stock: Yup.number().required('Required').min(0, 'Stock must be a positive number'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const fileUrls = await uploadImagesCustom(values.productMedia);
        const productData = {
          productName: values.name,
          productDescription: values.description,
          price: values.price,
          stock: values.stock,
          productImages: fileUrls,
          userId: user.email,
        };

        const emailAsDocId = user.email.replace(/[^a-zA-Z0-9]/g, "_");
        const vendorDocRef = doc(db, 'vendors', emailAsDocId);
        const vendorDoc = await getDoc(vendorDocRef);

        if (vendorDoc.exists()) {
          await updateDoc(vendorDocRef, {
            products: arrayUnion(productData)
          });
        } else {
          await setDoc(vendorDocRef, {
            products: [productData]
          });
        }

        navigate('/products');
      } catch (error) {
        console.error('Error adding product:', error);
        setErrors({ submit: error.message });
        setSubmitting(false);
      }
    },
  });

  const uploadImagesCustom = async (productMedia) => {
    const fileUrls = [];
    for (const key in productMedia) {
      if (productMedia.hasOwnProperty(key) && productMedia[key] !== null) {
        try {
          const storageRef = ref(storage, `product-images/${key}-${Date.now()}`);
          await uploadBytes(storageRef, productMedia[key]);
          const downloadURL = await getDownloadURL(storageRef);
          fileUrls.push(downloadURL);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
    return fileUrls;
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-[1.5rem] text-[#000] p-5">Add Product</h1>
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="w-full flex flex-col gap-5">
          <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-5">
            <div className="w-full flex justify-center items-center py-5 px-7 rounded-[10px]">
              <div className="w-full flex flex-col gap-5">
                <div className="input-box flex flex-col gap-1 lg:gap-2">
                  <label htmlFor="name" className="text-[#161616]">Product Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="border-[1px] border-[#D0D5DD] rounded-[5px] p-[8px] focus:outline-none focus:border-2 focus:border-[#D8541B]"
                    placeholder="Enter product name..."
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600 text-sm">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="input-box flex flex-col gap-1 lg:gap-2">
                  <label className="text-[#161616]">Description</label>
                  <TextArea getContent={(data) => formik.setFieldValue('description', data)} />
                  {formik.touched.description && formik.errors.description ? (
                    <div className="text-red-600 text-sm">{formik.errors.description}</div>
                  ) : null}
                </div>
                <div className="input-box flex flex-col gap-1 lg:gap-2">
                  <label htmlFor="price" className="text-[#161616]">Product Price</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    className="border-[1px] border-[#D0D5DD] rounded-[5px] p-[8px] focus:outline-none focus:border-2 focus:border-[#D8541B]"
                    placeholder="Enter product price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <div className="text-red-600 text-sm">{formik.errors.price}</div>
                  ) : null}
                </div>
                <div className="input-box flex flex-col gap-1 lg:gap-2">
                  <label htmlFor="stock" className="text-[#161616]">Stock</label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    className="border-[1px] border-[#D0D5DD] rounded-[5px] p-[8px] focus:outline-none focus:border-2 focus:border-[#D8541B]"
                    placeholder="Enter stock quantity"
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                  />
                  {formik.touched.stock && formik.errors.stock ? (
                    <div className="text-red-600 text-sm">{formik.errors.stock}</div>
                  ) : null}
                </div>
                <div className="input-box flex flex-col gap-1 lg:gap-2">
                  <label className="text-[#161616]">Product Media</label>
                  <div className="w-[100%] mt-4 grid md:grid-cols-4 gap-y-4 md:gap-x-5">
                    {Object.entries(formik.values.productMedia).map(([key, value]) => (
                      <div
                        key={key}
                        onClick={() => document.querySelector(`input[name=${key}]`).click()}
                        className="cursor-pointer border-[1px] border-[#D0D5DD] border-dashed rounded-[10px] h-[200px] px-5 flex flex-col gap-3 justify-center items-center"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => formik.setFieldValue(`productMedia.${key}`, e.target.files[0])}
                          name={key}
                        />
                        <div>
                          <img src={value ? URL.createObjectURL(value) : ProductMediaImg} alt="" className="object-contain" />
                        </div>
                        {!value && <p className="text-[#848484] text-xs text-center">Click to upload or update an image</p>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-32 flex justify-end items-center">
                  <button
                    className="bg-[#D8541B] text-[#FFF] rounded-[10px] border-[1px] border-[#d8541bce] py-3 px-4"
                    type="submit"
                  >
                    Publish Product
                  </button>
                </div>
                {formik.errors.submit && <div className="text-red-600 text-sm mb-4">{formik.errors.submit}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
