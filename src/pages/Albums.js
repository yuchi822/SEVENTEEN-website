import React from 'react';
import './Albums.css';
import albumData from '../assets/data/albums.json'; // 假設有 JSON 資料

const Albums = () => {
  return (
    <div className="albums">
      <h1>Albums</h1>
      <div className="album-list">
        {albumData.map((album) => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} />
            <h3>{album.title}</h3>
            <p>{album.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
