import React from 'react';
import './Footer.css'; // 單獨的樣式檔案

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 左側：版權資訊 */}
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} SEVENTEEN Official. All rights reserved.</p>
          <p>
            Designed by <a href="https://pledis.co.kr">PLEDIS Entertainment</a>
          </p>
        </div>

        {/* 中間：社群連結 */}
        <div className="footer-social">
          <a href="https://www.facebook.com/seventeen" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.twitter.com/pledis_17" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/svt" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.youtube.com/c/SEVENTEEN" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>

        {/* 右側：快速連結 */}
        <div className="footer-links">
          <a href="/members">Members</a>
          <a href="/albums">Albums</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
