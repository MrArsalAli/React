import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxwgoZVpT8JOvZPm8qKbQ78IZ-2195v10",
  authDomain: "sabafabrics-91513.firebaseapp.com",
  projectId: "sabafabrics-91513",
  storageBucket: "sabafabrics-91513.appspot.com",
  messagingSenderId: "1056611935275",
  appId: "1:1056611935275:web:e501a18119ba137c1eb66e",
  measurementId: "G-9KK7BV9L3P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
