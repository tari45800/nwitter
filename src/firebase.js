import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZsYxtkKohUjFXEBrJaQM9s_aZHV9b1Ww",
  authDomain: "nwitter-ddc64.firebaseapp.com",
  projectId: "nwitter-ddc64",
  storageBucket: "nwitter-ddc64.appspot.com",
  messagingSenderId: "1030803127918",
  appId: "1:1030803127918:web:5228a48a23d4f629cf707f"
};


const firebase = initializeApp(firebaseConfig);
export default firebase;