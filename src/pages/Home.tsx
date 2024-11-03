import React from 'react';
import '../styles/Home.css'; // Add this for consistent custom styles
import DashboardHeader from '../components/DashboardHeader';
import { useUser } from '../context/UserContext'; // Import the useUser hook

const Home = () => {
  const user = useUser(); // Get user data from context

  return (
    <div className="home-page">
      <DashboardHeader />
      <div className="content">
        <h2 className="welcome-text">Welcome, {user ? user.displayName : "Alex"}</h2>
        <div className="sections">
          <div className="section jump-back-in">
            <h3>Jump back in</h3>
            <div className="card">
              <p>🧪 Science - Level 1</p>
              <button className="continue-btn">Continue path</button>
            </div>
          </div>
          <div className="section recommended">
            <h3>Recommended for you</h3>
            <div className="recommendations">
              <span>✳️ Logic</span>
              <span>💻 CS Fundamentals</span>
              <span>➗ Math Equations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
