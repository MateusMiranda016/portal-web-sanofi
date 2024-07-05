import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_1RPasrGbBBUY4qaQMOLKaRiqvGzjzxU",
  authDomain: "auth-portal-a0413.firebaseapp.com",
  projectId: "auth-portal-a0413",
  storageBucket: "auth-portal-a0413.appspot.com",
  messagingSenderId: "455952314797",
  appId: "1:455952314797:web:4dcee512ec5db3f35c7124",
  measurementId: "G-BK84HYC6JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)