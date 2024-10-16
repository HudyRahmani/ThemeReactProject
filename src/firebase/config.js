import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFl_tsmhSeYAjmNT4A4GvSPIPuVnHIM78",
  authDomain: "hrweb-9525d.firebaseapp.com",
  projectId: "hrweb-9525d",
  storageBucket: "hrweb-9525d.appspot.com",
  messagingSenderId: "129274166059",
  appId: "1:129274166059:web:0869951c19128c4ce3a36e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore 
const db = getFirestore()

export {db}
