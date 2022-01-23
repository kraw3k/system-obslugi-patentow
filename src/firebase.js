import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcmrMAfXSn4Olwlx9soLdvzl9Eg3NyJHM",
  authDomain: "system-obslugi-patentow.firebaseapp.com",
  projectId: "system-obslugi-patentow",
  storageBucket: "system-obslugi-patentow.appspot.com",
  messagingSenderId: "306519512589",
  appId: "1:306519512589:web:d3b3473fafc7938b55a744",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
