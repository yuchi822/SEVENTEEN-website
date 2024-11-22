import React from 'react';
import albumsData from './assets/albums.json';

interface Album {
  id: number;
  title: string;
  releaseDate: string;
  cover: string;
}

const Albums: React.FC = () => {
  return (
    <section className="albums">
      <h2>專輯介紹</h2>
      <div className="albums-grid">
        {albumsData.map((album: Album) => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} />
            <h3>{album.title}</h3>
            <p>發布日期: {album.releaseDate}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Albums;
