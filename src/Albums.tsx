import React from 'react';
import './Albums.css'; // 確保正確引用樣式檔案
import albums from './assets/albums.json';

const Albums = () => {
  return (
    <ul className="card-container">
      {albums.map((album) => (
        <li key={album.id} className="card">
          <img
            className="album-image"
            src={require(`./assets/images/Albums/${album.cover}`)} // 使用 require 動態載入圖片
            alt={album.title}
          />
          <div className="card-name">
            {album.title}
            <br />
            <span style={{ fontSize: '12px', color: 'gray' }}>
              {album.releaseDate}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Albums;
