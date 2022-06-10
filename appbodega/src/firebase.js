import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsKeRt6WRIZ6yTQ3c5_CNqs_45r7xrL6A",
  authDomain: "appbodega-11ef8.firebaseapp.com",
  projectId: "appbodega-11ef8",
  storageBucket: "appbodega-11ef8.appspot.com",
  messagingSenderId: "957542915284",
  appId: "1:957542915284:web:a386bc30ffde1d4b866f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
