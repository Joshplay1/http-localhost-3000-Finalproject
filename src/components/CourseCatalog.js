// src/components/CourseCatalog.js
import React from 'react';

function CourseCatalog() {
  const courses = []; // Fetch from Firebase

  return (
    <div>
      <h2>Course Catalog</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseCatalog;
