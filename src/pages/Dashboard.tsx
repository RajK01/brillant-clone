import React, { useState } from 'react';
import Home from './Home';
import Courses from './Courses';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="logo">Brilliant</div>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
        <button className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>Courses</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
          type="text" 
          placeholder="Search" 
          onFocus={handleFocus} 
          onBlur={handleBlur}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="get-started" onClick={() => navigate('/dashboard')}>Get started</button> {}
      </div>
      <div className="dashboard-content">
        {activeTab === 'home' ? <Home /> : <Courses />}
      </div>
    </div>
  );
};


export default Dashboard;
