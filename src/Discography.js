import React from 'react';

const Discography = () => {
  const albums = [
    { title: 'Album 1', releaseDate: '2024', image: 'album1.jpg' },
    { title: 'Album 2', releaseDate: '2023', image: 'album2.jpg' },
    // 更多專輯...
  ];

  return (
    <div className="container">
      <h2>Discography</h2>
      <div className="row">
        {albums.map((album, index) => (
          <div key={index} className="col-md-4">
            <div className="album-card">
              <img src={`images/${album.image}`} alt={album.title} className="img-fluid" />
              <h3>{album.title}</h3>
              <p>{album.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discography;
