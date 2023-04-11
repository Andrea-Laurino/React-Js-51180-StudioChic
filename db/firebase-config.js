
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGRqZkfS6Q2IRJeOr-4rBmry4wkLpqbH0",
  authDomain: "studiochic-64933.firebaseapp.com",
  projectId: "studiochic-64933",
  storageBucket: "studiochic-64933.appspot.com",
  messagingSenderId: "429442152393",
  appId: "1:429442152393:web:8781d4f2b419fd6aee5a18"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;