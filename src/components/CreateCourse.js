// src/components/CreateCourse.js
import React, { useState } from 'react';

function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateCourse = () => {
    // Logic to store course data in Firebase
  };

  return (
    <form onSubmit={handleCreateCourse}>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Course</button>
    </form>
  );
}

export default CreateCourse;
