// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // 페이지 이동 함수
  const goToAboutPage = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our website. Here, you can find an introduction or other main content.</p>
      <button onClick={goToAboutPage}>Go to About Page</button>
    </div>
  );
}

export default Home;
