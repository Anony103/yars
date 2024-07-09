import React, { useEffect, useState } from 'react'
import ProductEmpty from '../assets/product-illustration.png'
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../config/AuthContext';
import Productions from '../components/Productions';

const Production = () => {
    const { fetchVendorProducts } = UserAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getVendorProducts = async () => {
      try {
        const vendorProducts = await fetchVendorProducts();
        setProducts(vendorProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getVendorProducts();
  }, [fetchVendorProducts]);

    return (
        <div className="flex flex-col gap-4 h-full">
            <div className="p-5">
                <h1 className="font-semibold text-[1.5rem] text-[#000]">My Products</h1>
            </div>

            {
               (
                    products.length <= 4 ? (
                        <div className="flex justify-center items-center w-full ">
                            <div className="w-full flex flex-col justify-center items-center gap-5">
                                <div className="w-full flex justify-center items-center">
                                    <div className="w-[30%]">
                                        <img className="w-full" src={ProductEmpty} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <h1 className="text-[2.5rem] font-semibold text-[#000]">Product Empty</h1>
                                    <div className="flex flex-col justify-center items-center gap-1 text-[#5C6375] text-[.8rem]">
                                        <p>You currently have no product to sell! Click on the</p>
                                        <p>button below to add a product.</p>
                                    </div>
                                </div>
                                <NavLink to="/add-product" className="flex justify-center bg-[#D8541B] text-[#FBFBFB] p-4 gap-2 rounded-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span>Add Product</span>
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center w-full h-full">
                            <div className="w-[93%] flex flex-col gap-5">
                                <div className="w-full flex justify-between py-3">
                                    <div className="lg:w-[40%] md:w-[40%] w-[70%]">
                                        {/* <SearchBar /> */}
                                    </div>
                                </div>
                                <div className="">
        {products.map((product, index) => (

            <Productions/>
        ))}
                      </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}
export default Production
