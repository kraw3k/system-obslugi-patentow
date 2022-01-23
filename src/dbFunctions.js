import {
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  limit,
} from "@firebase/firestore";
import { db } from "./firebase.js";

export const registerNumber = async (number) => {
  const numbersRef = collection(db, `numbers`);
  const now = Date.now();

  await addDoc(numbersRef, {
    number,
    createDate: now,
  });
};

export const endVisit = async (clerkNumber) => {
  const clerkRef = doc(db, `clerks`, clerkNumber);

  await updateDoc(clerkRef, {
    currentNumber: null,
  });
};

export const startVisit = async (clerkNumber) => {
  const clerkRef = doc(db, `clerks`, clerkNumber);
  const numbersRef = collection(db, `numbers`);

  const q = query(numbersRef, orderBy("createDate", "desc"), limit(1));

  const querySnapshot = await getDocs(q);

  const docs = [];

  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });

  const nextNumber = docs[0];

  await updateDoc(clerkRef, {
    currentNumber: nextNumber.number,
  });

  const nextNumberRef = doc(db, `numbers`, nextNumber.id);
  await deleteDoc(nextNumberRef);
};
