import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDGJnu0p_gQnEx_5TFqTYCgOuLd6Vxr35s",
  authDomain: "react-auth-45bc1.firebaseapp.com",
  projectId: "react-auth-45bc1",
  storageBucket: "react-auth-45bc1.appspot.com",
  messagingSenderId: "601688651566",
  appId: "1:601688651566:web:1e3ad0308f5f93c0002cbf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);