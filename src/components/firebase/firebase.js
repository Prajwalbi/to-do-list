// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { setPersistence , browserLocalPersistence } from "firebase/auth";
import { getDatabase, ref, remove, set, update,onValue, push , onChildRemoved, onChildChanged , get} from "firebase/database"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQqdgj7g4AwIcGqrhnlT5JoVQr6mzGi0Y",
  authDomain: "to-do-list-bb0bd.firebaseapp.com",
  databaseURL: "https://to-do-list-bb0bd-default-rtdb.firebaseio.com",
  projectId: "to-do-list-bb0bd",
  storageBucket: "to-do-list-bb0bd.appspot.com",
  messagingSenderId: "563412205711",
  appId: "1:563412205711:web:f582c12c754dc99c78b0fa",
  measurementId: "G-5G5E54HD6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

// Set persistence mode to local
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting auth persistence:", error);
});


export {  database as default,  ref, remove, set, update,onValue, push , onChildRemoved, onChildChanged, get,auth, googleAuthProvider }; 
