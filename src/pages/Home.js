import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* 頂部導航欄 */}
      <nav className="navbar">
        <div className="navbar-logo">SEVENTEEN</div>
        <ul className="navbar-links">
          <li><a href="#members">Members</a></li>
          <li><a href="#albums">Albums</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 中心內容 */}
      <div className="center-content">
        <h1 className="title">SEVENTEEN</h1>
        <p className="subtitle">Discover the music, the members, and the magic of SEVENTEEN</p>
      </div>

      {/* 底部社交媒體欄 */}
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://www.facebook.com/seventeen">Facebook</a>
          <a href="https://twitter.com/pledis_17">Twitter</a>
          <a href="https://www.instagram.com/svt">Instagram</a>
          <a href="https://www.youtube.com/c/SEVENTEEN">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
