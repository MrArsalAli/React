import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF4rVQuZAYnRQlJrnWyXKSbWINiXI4td8",
  authDomain: "sabafabrics-460d1.firebaseapp.com",
  projectId: "sabafabrics-460d1",
  storageBucket: "sabafabrics-460d1.appspot.com",
  messagingSenderId: "13167366065",
  appId: "1:13167366065:web:c207186a3e5ef3318f7790",
  measurementId: "G-637PHPM3MG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)
const db = getFirestore(app);

export { app, auth, storage, db };
