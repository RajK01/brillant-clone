import React from 'react';
import Header from '../components/Header'; // In landing let's include header
import HeroSection from '../components/HeroSection'; // Including hero section .tsx (type script with xml code)
import "../styles/LandingPage.css"; // Importing the CSS file that contains styles for this landing page
import Footer from '../components/Footer'; // Import the Footer component

// Defining the LandingPage component as a functional component (React.FC is a type for functional components in TypeScript)
const LandingPage: React.FC = () => (
  <div>
    <Header />
    <HeroSection />
     <Footer />
  </div>
);

// Exporting the LandingPage component so it can be imported and used in other parts of the app
export default LandingPage;