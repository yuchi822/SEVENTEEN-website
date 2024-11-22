import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Members from './Members';
import Albums from './Albums';
import FeaturedSong from './FeaturedSong';
import SocialMedia from './SocialMedia';
import Home from './Home';
import './assets/Style.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="background"></div>
        <header className="app-header">
          <h1>SEVENTEEN</h1>
          <nav className="nav-links">
          <NavLink to="/"className={({ isActive }) => (isActive ? 'active' : '')}>
          首頁
          </NavLink>
            <NavLink to="/members" className={({ isActive }) => (isActive ? "active" : undefined)}>
              成員
            </NavLink>
            <NavLink to="/albums" className={({ isActive }) => (isActive ? "active" : undefined)}>
              專輯
            </NavLink>
            <NavLink to="/featured-song" className={({ isActive }) => (isActive ? "active" : undefined)}>
              MV列表
            </NavLink>
          </nav>
        </header>



        <main>
          <Routes>
            {/* 首頁 */}
            <Route path="/" element={<Home />} />
            {/* 功能頁面 */}
            <Route path="/members" element={<Members />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/featured-song" element={<FeaturedSong />} />
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
