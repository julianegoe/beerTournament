import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyBx2Bu0diuutnoD2r9ykjCIDt0gx5WlDiQ",
  authDomain: "beertasting-421a7.firebaseapp.com",
  projectId: "beertasting-421a7",
  storageBucket: "beertasting-421a7.appspot.com",
  messagingSenderId: "774670111039",
  appId: "1:774670111039:web:1bc8ba14dd65c05392838a",
};

const devConfig = {
  apiKey: "AIzaSyAiNEWNiw-ymnPfYjqO-nqdC7lixBT5ZT4",
  authDomain: "bierturnier-dev.firebaseapp.com",
  databaseURL: "https://bierturnier-dev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bierturnier-dev",
  storageBucket: "bierturnier-dev.appspot.com",
  messagingSenderId: "476121616853",
  appId: "1:476121616853:web:26ebc4128fecda402eed5c"
};

const config = process.env.VUE_APP_NODE_ENV === 'production'
? prodConfig : devConfig


const firebase = initializeApp(config)

// utils
const db = getFirestore();
const auth = getAuth();
auth.languageCode = 'de';
const storage = getStorage();
const database = getDatabase();

// export utils/refs
export {
    db,
    auth,
    storage,
    firebase,
    database,
}