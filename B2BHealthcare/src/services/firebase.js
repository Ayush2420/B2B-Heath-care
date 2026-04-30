import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDG-_DstgBYd1jW1wF7BJex31gKZM0hF9E",
    authDomain: "healthcare-saas-a2de3.firebaseapp.com",
    projectId: "healthcare-saas-a2de3",
    storageBucket: "healthcare-saas-a2de3.firebasestorage.app",
    messagingSenderId: "905497376839",
    appId: "1:905497376839:web:56e5ba92fcf7a0b30d5962"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);