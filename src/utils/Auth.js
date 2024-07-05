// Auth.js
import { auth } from '../firebase/firebaseConfig';

export const isAuthenticated = () => {
  return !!auth.currentUser;
};