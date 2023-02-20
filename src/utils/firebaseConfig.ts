import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAPxQvuhDFW3UFaQCQxKDpr_uwb8mrhZ04",
  authDomain: "video-chat-97915.firebaseapp.com",
  projectId: "video-chat-97915",
  storageBucket: "video-chat-97915.appspot.com",
  messagingSenderId: "463855501982",
  appId: "1:463855501982:web:9544b32569769d0dd2718f"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
