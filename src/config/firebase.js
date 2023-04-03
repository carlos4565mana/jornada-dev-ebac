
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyB7yOrjBk3A9Pok0tHwK_4YYkvzKU9Eu88",
  authDomain: "jornada-dev-ebac.firebaseapp.com",
  projectId: "jornada-dev-ebac",
  storageBucket: "jornada-dev-ebac.appspot.com",
  messagingSenderId: "209668040183",
  appId: "1:209668040183:web:fcf7857a5f890689063af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;