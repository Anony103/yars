import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const signUpUser = async (email, password, additionalData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const emailAsDocId = email.replace(/[^a-zA-Z0-9]/g, "_");
      await setDoc(doc(db, 'vendors', emailAsDocId), {
        uid: user.uid,
        email,
        role: 'vendor',
        ...additionalData
      });

      setUser(user);
      console.log('User created:', user);
    } catch (error) {
      console.error('Error signing up user:', error.message);
      throw error;
    }
  };

  const authenticateUserWithEmailPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
  
      const emailAsDocId = email.replace(/[^a-zA-Z0-9]/g, "_");
      const userDoc = await getDoc(doc(db, 'vendors', emailAsDocId));
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log(userData.role);

        setUser({ ...loggedInUser, role: userData.role });
      } else {
        console.error('No such document!');
      }
  
      console.log('User logged in:', loggedInUser);
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };

  const fetchAllProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vendors"));
      let allProducts = [];
      querySnapshot.forEach((doc) => {
        const vendorData = doc.data();
        if (vendorData.products && vendorData.products.length > 0) {
          allProducts = [...allProducts, ...vendorData.products];
        }
      });
      return allProducts;
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

  const fetchVendorProducts = async () => {
    if (!user) {
      throw new Error("User is not authenticated");
    }
    try {
      const emailAsDocId = user.email.replace(/[^a-zA-Z0-9]/g, "_");
      const vendorDocRef = doc(db, 'vendors', emailAsDocId);
      const vendorDoc = await getDoc(vendorDocRef);

      if (vendorDoc.exists()) {
        const vendorData = vendorDoc.data();
        return vendorData.products || [];
      } else {
        console.error('No such document!');
        return [];
      }
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUpUser, authenticateUserWithEmailPassword, logOut, fetchAllProducts, fetchVendorProducts }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
