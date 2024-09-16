import React from 'react';
import './About.css'; // Create and style this

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Our platform is dedicated to providing high-quality education to learners around the world.
        We partner with industry experts to deliver comprehensive and engaging courses in a variety of fields.
      </p>
      <h2>Our Mission</h2>
      <p>To make learning accessible, affordable, and effective for all.</p>
      <h2>Contact us</h2>
      <div className="instructors">
        <div className="instructor-card">
          <h3>Email</h3>
          <p>joshuaowolabi03@gmail.com</p>
        </div>
        <div className="instructor-card">
          <h3>Mobile number</h3>
          <p>+2349026238600</p>
        </div>
      </div>
    </div>
  );
};

export default About;
