import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtKohXevrIaL9zQ6Hn-YoK2orvSNwSEb8",
  authDomain: "compuestos2.firebaseapp.com",
  projectId: "compuestos2",
  storageBucket: "compuestos2.appspot.com",
  messagingSenderId: "816798968810",
  appId: "1:816798968810:web:08837d42cf0952c8b6a093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);

export const consulta = collection(db, "cargados");
export const consumidos = collection(db, "consumidos");
