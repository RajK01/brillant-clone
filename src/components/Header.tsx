import React from 'react';
import "./Header.css";

import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">Brilliant</div>
    <nav>
      <Link to="/login" className="login-button">Log In</Link>
    </nav>
  </header>
);


export default Header;
