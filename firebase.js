// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfo3vaVJ6Jc5CsA8T7quFFxpt_SuBhPh4",
  authDomain: "fix-dc8a0.firebaseapp.com",
  projectId: "fix-dc8a0",
  storageBucket: "fix-dc8a0.appspot.com",
  messagingSenderId: "325616141106",
  appId: "1:325616141106:web:387b055bbd8fdf99054d2b",
  measurementId: "G-M6ZL9106JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { database, ref, set };
