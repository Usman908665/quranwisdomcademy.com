// firebase-config.js
// Replace placeholders with your Firebase project's config values.

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";

const firebaseConfig = {
      apiKey: "AIzaSyDgCZkVRHQFLeVB9MNNwChhwjv42lVSNmQ",
      authDomain: "auth-app-f1a5d.firebaseapp.com",
      projectId: "auth-app-f1a5d",
      storageBucket: "auth-app-f1a5d.firebasestorage.app",
      messagingSenderId: "493701163132",
      appId: "1:493701163132:web:08c04b437f36a6e42fc1f9"
    };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // if you want Google sign-in
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, provider, db, storage };
