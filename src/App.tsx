import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Members from './Members';
import Albums from './Albums';
import FeaturedSong from './FeaturedSong';
import SocialMedia from './SocialMedia';
import Home from './Home';
import './assets/Style.css';

const App: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(true); // 控制模態框顯示

  // 關閉模態框
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="app">
        {/* 背景圖片 */}
      <div className={`background ${isModalOpen ? 'blurred' : ''}`}></div>
        {/* 主要內容 */}
        <div className={`background-content ${isModalOpen ? 'blurred' : ''}`}>
          <header className="app-header">
            <h1>SEVENTEEN</h1>
            <nav className="nav-links">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
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
          <footer className="social-media">
            <SocialMedia />
          </footer>
        </div>

        {/* 模態框：獨立層，避免模糊效果 */}
        {isModalOpen && (
          <div className="modal">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>模態框內容</h2>
            <p>這是模態框的內容，您可以在這裡添加自定義內容。</p>
          </div>
        )}
      </div>

    </Router>
  );
};

export default App;
