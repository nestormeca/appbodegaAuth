import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB124MmbQ9CmKFz26U_5cGwyoytDKY702M",
  authDomain: "bodega-339515.firebaseapp.com",
  projectId: "bodega-339515",
  storageBucket: "bodega-339515.appspot.com",
  messagingSenderId: "1005094074539",
  appId: "1:1005094074539:web:ee9da35fc98778a23d9fee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
connectFirestoreEmulator(db, "localhost", 8080);

export const storage = getStorage(app);

export const cauchoConsignado = collection(db, "cauchoConsignado");
export const cauchoConsumido = collection(db, "cauchoComsumido");

// const getMonth2 = () => {
//   let date = new Date();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   if (month < 10) {
//     return `0${1 + month}-${year}`;
//   } else {
//     return `${1 + month}-${year}`;
//   }
// };
