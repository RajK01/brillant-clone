import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import loginImage from '../assets/login.png';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("Error during Google login: ", error);
      // Handle Errors here.
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle sign-up logic for email/password (if needed)
    navigate('/dashboard'); // Redirect on form submit (for now)
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left side with image */}
        <div className="auth-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>

        {/* Right side with form */}
        <div className="auth-form-container">
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
