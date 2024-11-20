// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 导入组件
import Home from './Home';  // 假设 Home.js 在 src 目录下
import Members from './Members';  // 假设 Members.js 在 src 目录下
import Discography from './Discography';  // 假设 Discography.js 在 src 目录下
import News from './News';  // 假设 News.js 在 src 目录下
import SocialMedia from './SocialMedia';  // 假设 SocialMedia.js 在 src 目录下

function App() {
  return (
    <div className="App">
      <h1>Welcome to Seventeen's Website</h1>

      {/* 配置路由 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/news" element={<News />} />
        <Route path="/social" element={<SocialMedia />} />
      </Routes>
    </div>
  );
}

export default App;
