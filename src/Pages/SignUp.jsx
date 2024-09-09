// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../protectedRoute/AuthProvider';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the credentials match
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className='register'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-holder">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder='Enter Your Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
        </div>
        <div className="input-holder">
          <div className="password">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder='Enter Your Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <div className="submit">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
