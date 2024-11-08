// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Component1 from '../module/Component1';
import Hello from './Hello';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Us</h1>
      <p>This page provides information about our website or company. Learn more about our mission, team, and services.</p>
      <Component1 />
      <Hello />
      <button onClick={() => navigate('/')}>Go Back to Home Page</button>
    </div>
  );
}

export default About;
