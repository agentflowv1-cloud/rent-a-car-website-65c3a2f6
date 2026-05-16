import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="hero">
      <img src="https://picsum.photos/2000/1000" alt="Hero Image" />
      <div className="hero-overlay">
        <h1>Welcome to our website</h1>
        <p>Learn more about us</p>
        <Link to="/about" className="btn">About Us</Link>
      </div>
    </div>
  );
}

export default Home;