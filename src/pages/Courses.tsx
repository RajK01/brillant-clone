import React, { useState } from 'react';
import '../styles/Courses.css';

const Courses: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="courses" style={{ height: isFocused ? '120vh' : 'auto' }}>
      <h2>Browse all 70+ courses</h2>
      <input 
        type="text" 
        placeholder="Search" 
        onFocus={handleFocus} 
        onBlur={handleBlur}
      />
      <div className="course-categories">
        <button>New courses</button>
        <button>Math</button>
        <button>Data</button>
        <button>Computer Science</button>
        <button>Science</button>
      </div>
      <div className="new-courses">
        <div className="course-card">🆕 How LLMs Work</div>
        <div className="course-card">🆕 Designing Programs</div>
        <div className="course-card">📘 Intro to Probability</div>
        <div className="course-card">📘 Modeling and Multiple Variables</div>
        <div className="course-card">📘 Vectors</div>
        <div className="course-card">📘 Applied Python</div>
      </div>
    </div>
  );
};

export default Courses;
