import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig =  {
  apiKey: "AIzaSyAiNEWNiw-ymnPfYjqO-nqdC7lixBT5ZT4",
  authDomain: "bierturnier-dev.firebaseapp.com",
  projectId: "bierturnier-dev",
  storageBucket: "bierturnier-dev.appspot.com",
  messagingSenderId: "476121616853",
  appId: "1:476121616853:web:26ebc4128fecda402eed5c"
};

const firebase = initializeApp(firebaseConfig)

// utils
const db = getFirestore();
const auth = getAuth();
auth.languageCode = 'de';
const storage = getStorage();

// export utils/refs
export {
    db,
    auth,
    storage,
    firebase,
}