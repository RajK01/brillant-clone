// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-left">
      <span className="logo-text">Brilliant</span>
    </div>
    <div className="footer-right">
      <span>© 2024 Brilliant. Created by [Your Name or Company]</span>
    </div>
  </footer>
);

export default Footer;
