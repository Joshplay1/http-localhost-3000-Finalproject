import React from 'react';
import './Courses.css'; // Create and style this

const Courses = () => {
  const courses = [
    { title: 'Web Development', description: 'Learn to build modern websites.', thumbnail: 'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=1024x1024&w=is&k=20&c=YdGWQdXQYg-G1H89Q12soaleNQEKH9JpihwvrLdFHeA=' },
    { title: 'Data Science', description: 'Master data analysis and machine learning.', thumbnail: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Data%20Science%201600x800.jpg' },
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
