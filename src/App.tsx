import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Members from './Members';
import Albums from './Albums';
import FeaturedSong from './FeaturedSong';
import SocialMedia from './SocialMedia';
 
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* 背景圖片 */}
        <div className="background"></div>

        <header className="app-header">
          <h1>SEVENTEEN</h1>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              主打歌
            </NavLink>
            <NavLink to="/members" className={({ isActive }) => (isActive ? 'active' : '')}>
              成員介紹
            </NavLink>
            <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active' : '')}>
              專輯介紹
            </NavLink>
          </nav>
        </header>
        <main className="main-section">
          <Routes>
            <Route path="/" element={<FeaturedSong />} />
            <Route path="/members" element={<Members />} />
            <Route path="/albums" element={<Albums />} />
          </Routes>
        </main>
        <footer>
        <SocialMedia />
      </footer>
      </div>
    </Router>
  );
};

export default App;
