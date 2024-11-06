import React, { useState } from 'react';
import Home from './Home';
import Courses from './Courses';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="logo">Brilliant</div>

        {/* Navigation and Search Section */}
        <div className="nav-search">
          <div className="nav-tabs">
            <button 
              className={`tab ${activeTab === 'home' ? 'active' : ''}`} 
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button 
              className={`tab ${activeTab === 'courses' ? 'active' : ''}`} 
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </button>
          </div>

          {/* Search Input */}
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              onFocus={handleFocus} 
              onBlur={handleBlur} 
              className={isFocused ? 'focused' : ''}
            />
          </div>
        </div>

        {/* Get Started Button */}
        <button className="get-started" onClick={() => navigate('/dashboard')}>Get Started</button>
      </div>

      {/* Main Content Area */}
      <div className="dashboard-content">
        {activeTab === 'home' ? <Home /> : <Courses />}
      </div>

      {/* Footer Section */}
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default Dashboard;
