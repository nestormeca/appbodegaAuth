import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjAVSGbZjIdNOr9b8XWWbcSm6CD6YDid0",
  authDomain: "compuestos-552a0.firebaseapp.com",
  projectId: "compuestos-552a0",
  storageBucket: "compuestos-552a0.appspot.com",
  messagingSenderId: "520099289293",
  appId: "1:520099289293:web:f4b663ddd909ebe03d7184",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);

export const consulta = collection(db, "cargados");

const getMonth2 = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) {
    return `0${1 + month}-${year}`;
  } else {
    return `${1 + month}-${year}`;
  }
};

export const consumidos = collection(db, `consumo-${getMonth2()}`);
