import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Members from './Members';
import Albums from './Albums';
import FeaturedSong from './FeaturedSong';
import SocialMedia from './SocialMedia';
import Home from './Home';

const App: React.FC = () => (
  <Router>
    <div className="app">
      {/* 背景圖片 */}
      <div className="background"></div>

      {/* 主要內容 */}
      <div className="content">
        <header className="app-header">
          {/* SEVENTEEN 與首頁連結 */}
          <NavLink to="/" className="logo-link">
            <h1>SEVENTEEN</h1>
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/members" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              成員
            </NavLink>
            <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              專輯
            </NavLink>
            <NavLink to="/featured-song" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              MV列表
            </NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/featured-song" element={<FeaturedSong />} />
          </Routes>
        </main>
        <footer className="social-media">
          <SocialMedia />
        </footer>
      </div>
    </div>
  </Router>
);

export default App;
