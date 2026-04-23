import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJ51q10wnS3M44FN5ynEa448iaFIHF3vw",
  authDomain: "marktech-a89b4.firebaseapp.com",
  projectId: "marktech-a89b4",
  storageBucket: "marktech-a89b4.firebasestorage.app",
  messagingSenderId: "174835858964",
  appId: "1:174835858964:web:27a12739a8ce4e4fdcb101"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btn = document.getElementById("googleLogin");

if (btn) {
  btn.onclick = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error(e);
    }
  };
}

console.log("AUTH OK:", typeof signInWithPopup);
