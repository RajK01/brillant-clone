import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css';
import landingImage from '../assets/landing.png';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: "left", marginLeft: "auto" }}>
            <h1>Learn by <span className="highlight">doing</span></h1>
            <p>Guided interactive problem solving that’s effective and fun. Master concepts in 15 minutes a day.</p>
            <button className="get-started" onClick={() => navigate('/dashboard')}>Get started</button> {}
          </div>

          {}
          <img 
            src={landingImage} 
            alt="Learning illustration" 
            className="hero-image" 
            style={{ width: "36%", marginRight: "70px" }} 
          />
        </div>

        {}
        <div className="categories" style={{ textAlign: "left", marginLeft: "40px" }}>
          <div className="category">
            <p>📐 Math</p>
          </div>
          <div className="category">
            <p>📊 Data Analysis</p>
          </div>
          <div className="category">
            <p>💻 Computer Science</p>
          </div>
          <div className="category">
            <p>🤖 Programming & AI</p>
          </div>
          <div className="category">
            <p>⚙️ Science & Engineering</p>
          </div>
        </div>
      </div>

      {}
      <div className="social-proof">
        <p><b>Join over 10 million people learning on Brilliant</b></p>
        <div className="partners">
          <div className="partner-logos">
            <p><br /> <span> The New York Times</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p><br /><span> Atlantic</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>⭐⭐⭐⭐⭐ <br />Over 50,000 5-star reviews on</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>💚Trustpilot<br />🟩🟩🟩🟩🟩</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p><br /><span>🍏 App of the Day</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p><br /><span>🍏 Best App</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
