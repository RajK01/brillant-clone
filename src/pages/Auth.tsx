// Importing necessary libraries and components
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation between routes
import '../styles/Auth.css';
import loginImage from '../assets/login.png'; 
import Footer from '../components/Footer'; // Import the Footer component

// Firebase Authentication setup
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config object to initialize the app with your Firebase credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initializing Firebase app and setting up Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Auth: React.FC = () => {
  // useNavigate hook from React Router to navigate between pages
  const navigate = useNavigate();

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Create a new Google Auth provider
    try {
      // Sign in with a popup window and Google provider
      const result = await signInWithPopup(auth, provider);
      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      // If there's an error, log it in the console
      console.error("Error during Google login: ", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  // Function to handle form submission for email/password login or sign up
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // For now, we just navigate to the dashboard (could add actual sign-up logic here)
    navigate('/dashboard');
  };

  return (
    <div className="auth-page"> {/* Main container for the authentication page */}
      <div className="auth-container">
        {/* Left side with image */}
        <div className="auth-image">
          {/* Displaying the login image */}
          <img src={loginImage} alt="Login Illustration" />
        </div>

        {/* Right side with form */}
        <div className="auth-form-container">
          {/* Heading for the sign-up section */}
          <h2>Create a free account to discover your personalized learning path</h2>

          <div className="auth-options">
            <button className="auth-option google" onClick={handleGoogleLogin}>
              Google
            </button>
            <button className="auth-option facebook">Facebook</button>
          </div>
          <p>_______________________OR________________________</p>

          <form className="auth-form" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="auth-submit">Sign up</button>

            <p className="terms">
              By clicking above, I agree to Brilliant’s <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
            <p className="login-link">Existing user? <a href="/login">Log in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
