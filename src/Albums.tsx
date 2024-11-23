import React from 'react';
import './Albums.css'; 
import albums from './assets/albums.json';
import miniAlbum from './assets/miniAlbums.json';

const Albums = () => {
  return (
    <div>
      <div className="albums-section">
        <h2 className="section-title">正規專輯</h2>
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
      </div>
      
      <div className="mini-albums-section">
        <h2 className="section-title">迷你專輯</h2>
        <ul className="card-container">
          {miniAlbum.map((miniAlbum, index) => (
            <li key={index} className="card">
              <img
                className="album-image"
                src={require(`./assets/images/Albums/${miniAlbum.cover}`)} // 假設每個迷你專輯也有封面
                alt={miniAlbum.title}
              />
              <div className="card-name">
                {miniAlbum.title}
                <br />
                <span style={{ fontSize: '12px', color: 'gray' }}>
                  {miniAlbum.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Albums;
