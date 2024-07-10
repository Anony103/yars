import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);

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
      await setDoc(doc(db, 'admins', emailAsDocId), {
        uid: user.uid,
        email,
        role: 'admin',
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
      const userDoc = await getDoc(doc(db, 'admins', emailAsDocId));

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

  const fetchAllUsers = async () => {
    try {
      const usersCollection = collection(db, 'user');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
      return usersList;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw error;
    }
  };

  const fetchCustomerById = async (id) => {
    try {
      const customerDoc = await getDoc(doc(db, 'user', id));
      if (customerDoc.exists()) {
        return { id: customerDoc.id, ...customerDoc.data() };
      } else {
        console.error('No such customer!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching customer:', error.message);
      throw error;
    }
  };

  const fetchAllVendors = async () => {
    try {
      const vendorsCollection = collection(db, 'vendors');
      const vendorsSnapshot = await getDocs(vendorsCollection);
      const vendorsList = vendorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(vendorsList);
      console.log('All vendors:', vendorsList);
      return vendorsList;
    } catch (error) {
      console.error('Error fetching vendors:', error.message);
      throw error;
    }
  };

  const fetchVendorById = async (id) => {
    try {
      const VendorDoc = await getDoc(doc(db, 'vendors', id));
      if (VendorDoc.exists()) {
        return { id: VendorDoc.id, ...VendorDoc.data() };
      } else {
        console.error('No such VendorDoc!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching VendorDoc:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, users, vendors, signUpUser, authenticateUserWithEmailPassword, logOut, fetchAllUsers, fetchAllVendors, fetchCustomerById, fetchVendorById }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
