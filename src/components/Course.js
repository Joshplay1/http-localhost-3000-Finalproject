import React from 'react';
import './Courses.css'; // Create and style this

const Courses = () => {
  const courses = [
    { title: 'Web Development', description: 'Learn to build modern websites.', thumbnail: 'web-dev.jpg' },
    { title: 'Data Science', description: 'Master data analysis and machine learning.', thumbnail: 'data-science.jpg' },
  ];

  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.thumbnail} alt={course.title} className="course-thumbnail" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
