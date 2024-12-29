// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {doc, getFirestore, setDoc} from 'firebase/firestore'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBDmA8REiohZtGYrciBQk3qDj4mkzItaCs",
  authDomain: "convochat-71e95.firebaseapp.com",
  projectId: "convochat-71e95",
  storageBucket: "convochat-71e95.firebasestorage.app",
  messagingSenderId: "341121548248",
  appId: "1:341121548248:web:559389aa3916a2e2fc7cad"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up Function
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user to the "users" collection
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey there, I am using ConvoChat",
      lastSeen: Date.now(), // Corrected 'date' to 'Date'
    });

    // Initialize empty chat data
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });

    toast.success("Account created successfully!");
  } catch (error) {
    console.error("Sign Up Error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Log In Function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (error) {
    console.error("Login Error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Log Out Function
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Export functions and Firebase instances
export { signup, login, logout, auth, db };