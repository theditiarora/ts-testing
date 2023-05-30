import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwI36fJcduI3uZqgcdfmvYtWdb8ZnoaKU",
  authDomain: "ts-testing-ed0ca.firebaseapp.com",
  projectId: "ts-testing-ed0ca",
  storageBucket: "ts-testing-ed0ca.appspot.com",
  messagingSenderId: "948795939883",
  appId: "1:948795939883:web:110833469d1d1866615e6e",
  measurementId: "G-HCZNXPHF0V",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
