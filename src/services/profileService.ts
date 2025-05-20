import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

const PROFILE_DOC_ID = "main"; // only one profile document

export const fetchProfile = async () => {
  const docRef = doc(db, "profile", PROFILE_DOC_ID);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? snapshot.data() : null;
};

export const saveProfile = async (data: any) => {
  const docRef = doc(db, "profile", PROFILE_DOC_ID);
  await setDoc(docRef, data);
};
