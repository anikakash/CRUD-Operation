import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCFJHrgHdGWs9kgULDyLQZpyVQVD2dApHU",
  authDomain: "library-86510.firebaseapp.com",
  projectId: "library-86510",
  storageBucket: "library-86510.appspot.com",
  messagingSenderId: "246390324873",
  appId: "1:246390324873:web:3f6218f15a7cda5d209058"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);