import React from 'react';
import './FeaturedSong.css';

const FeaturedSong: React.FC = () => {
  const songs = [
    { name: "Adore U", src: "https://www.youtube.com/watch?v=9rUFQJrCT7M", thumbnail: "https://img.youtube.com/vi/9rUFQJrCT7M/0.jpg" },
    { name: "MANSAE", src: "https://www.youtube.com/watch?v=9M7k9ZV67c0", thumbnail: "https://img.youtube.com/vi/9M7k9ZV67c0/0.jpg" },
    { name: "Pretty U", src: "https://www.youtube.com/watch?v=j59LLNMEOZk", thumbnail: "https://img.youtube.com/vi/j59LLNMEOZk/0.jpg" },
    { name: "VERY NICE", src: "https://www.youtube.com/watch?v=J-wFp43XOrA", thumbnail: "https://img.youtube.com/vi/J-wFp43XOrA/0.jpg" },
    { name: "BOOMBOOM", src: "https://www.youtube.com/watch?v=IzplmS-VeBc", thumbnail: "https://img.youtube.com/vi/IzplmS-VeBc/0.jpg" },
    { name: "Don't Wanna Cry", src: "https://www.youtube.com/watch?v=zEkg4GBQumc", thumbnail: "https://img.youtube.com/vi/zEkg4GBQumc/0.jpg" },
    { name: "Clap", src: "https://www.youtube.com/watch?v=CyzEtbG-sxY", thumbnail: "https://img.youtube.com/vi/CyzEtbG-sxY/0.jpg" },
    { name: "THANKS", src: "https://www.youtube.com/watch?v=gZItyr1SNjU", thumbnail: "https://img.youtube.com/vi/gZItyr1SNjU/0.jpg" },
    { name: "Oh My!", src: "https://www.youtube.com/watch?v=_5PELxP8Udg", thumbnail: "https://img.youtube.com/vi/_5PELxP8Udg/0.jpg" },
  ];

  return (
    <section className="featured-song">
      <h2>主打歌 - HOT</h2>
      
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song-item">
            <div className="song-thumbnail-container">
              <a href={song.src} target="_blank" rel="noopener noreferrer">
                <img
                  src={song.thumbnail}
                  alt={song.name}
                  className="song-thumbnail"
                />
              </a>
            </div>
            <h3>{song.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSong;