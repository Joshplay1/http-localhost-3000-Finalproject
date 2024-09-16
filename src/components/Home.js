import React from 'react';
import './Home.css'; // Create and style this

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.webp?a=1&b=1&s=612x612&w=0&k=20&c=t8D-3uQw-Dkvq5DluqPW1P7vbXyy2mN7XpKE_zcDWiw=" className="banner-img" />
        <h1>Welcome to the E-Learning Platform!</h1>
        <p>Your journey towards mastering new skills starts here.</p>
      </div>
      <div className="features">
        <div className="feature-card">
          <h2>Expert Instructors</h2>
          <p>Learn from the best in the industry.</p>
        </div>
        <div className="feature-card">
          <h2>Flexible Learning</h2>
          <p>Study at your own pace with flexible course structures.</p>
        </div>
        <div className="feature-card">
          <h2>Certification</h2>
          <p>Get certified in various domains upon course completion.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
