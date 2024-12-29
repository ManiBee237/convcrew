import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import profileUpdate from './pages/profileUpdate/profileUpdate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/chat'); // User is authenticated
      } else {
        navigate('/login'); // No user
      }
      setLoading(false); // Authentication check complete
    });

    return () => unsubscribe(); // Cleanup listener
  }, [navigate]); // Ensure `navigate` is up-to-date

  if (loading) {
    return <div>Loading...</div>; // Placeholder while checking auth state
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<profileUpdate />}/>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
