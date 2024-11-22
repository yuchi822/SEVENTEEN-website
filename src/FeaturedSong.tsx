import React from 'react';

const FeaturedSong: React.FC = () => {
  return (
    <section className="featured-song">
      <h2>主打歌 - HOT</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6_0UavIqFh8"
        title="SEVENTEEN 主打歌 MV"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default FeaturedSong;
