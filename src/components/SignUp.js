import React from 'react';
import './SignUp.css'; // Create and style this

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
