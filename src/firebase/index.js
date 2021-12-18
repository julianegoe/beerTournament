import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx2Bu0diuutnoD2r9ykjCIDt0gx5WlDiQ",
  authDomain: "beertasting-421a7.firebaseapp.com",
  projectId: "beertasting-421a7",
  storageBucket: "beertasting-421a7.appspot.com",
  messagingSenderId: "774670111039",
  appId: "1:774670111039:web:1bc8ba14dd65c05392838a",
};

initializeApp(firebaseConfig)

// utils
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

// export utils/refs
export {
    db,
    auth,
    storage,
}