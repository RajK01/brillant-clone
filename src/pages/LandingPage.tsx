import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseCards from '../components/CourseCards';
import "../styles/LandingPage.css";

const LandingPage: React.FC = () => (
  <div>
    <Header />
    <HeroSection />
    <section className="course-category">
      <div className="categories">
       
      </div>
    </section>
  </div>
);

export default LandingPage;
