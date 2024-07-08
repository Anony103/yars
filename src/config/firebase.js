import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCEdm1_iXoIFpxQQEJxCNIpxSd_2pLy8XE",
  authDomain: "yarsmarketplace.firebaseapp.com",
  projectId: "yarsmarketplace",
  storageBucket: "yarsmarketplace.appspot.com",
  messagingSenderId: "144014575055",
  appId: "1:144014575055:web:c8518d3d8daa890ea1feba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
