import React from 'react';
import '../styles/CourseCards.css';

interface CourseCardProps {
  title: string;
  category: string;
  isNew: boolean;
}

const CourseCards: React.FC<CourseCardProps> = ({ title, category, isNew }) => (
  <div className="course-card">
    {isNew && <span className="new-badge">New</span>}
    <h3>{title}</h3>
    <p>{category}</p>
  </div>
);

export default CourseCards;