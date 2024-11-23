import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Members from './Members';
import Albums from './Albums';
import FeaturedSong from './FeaturedSong';
import SocialMedia from './SocialMedia';
import Home from './Home';

const App: React.FC = () => (
  <Router>
    <BackgroundManager />
    <div className="app homepage">
      <div className="content">
        <header className="app-header">
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
            {/* 首頁 */}
            <Route path="/" element={<Home />} />
            {/* 功能頁面 */}
            <Route path="/members" element={<Members />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/featured-song" element={<FeaturedSong />} />
            {/* 預設導向首頁 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <SocialMedia />
        </footer>
      </div>
    </div>
  </Router>
);

const BackgroundManager: React.FC = () => {
  const location = useLocation();

  // 判斷當前頁面是否是首頁
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.remove('white-page-background');
      document.body.classList.add('homepage-background');
    } else {
      document.body.classList.remove('homepage-background');
      document.body.classList.add('white-page-background');
    }
  }, [isHomePage]);

  return null; // 背景管理邏輯不需要返回任何 DOM 結構
};

export default App;
