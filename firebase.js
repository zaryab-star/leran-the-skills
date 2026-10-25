import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBF7meTNL_SoaaF_8nvBr4BhqByfwMpgLk",
  authDomain: "leran-the-skills.firebaseapp.com",
  projectId: "leran-the-skills",
  storageBucket: "leran-the-skills.firebasestorage.app",
  messagingSenderId: "340436398150",
  appId: "1:340436398150:web:7a8441e8df336d16bb1a47",
  measurementId: "G-6P5KHHL910"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);