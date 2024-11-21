import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import heroImage from '../assets/images/hero.jpg'; // 大圖

const Home = () => {
  return (
    <div>
      <Hero
        title="Welcome to SEVENTEEN"
        subtitle="Discover their music, journey, and more"
        backgroundImage={heroImage}
      />
      <Section title="Upcoming Events" content="Check out their latest schedule and events." />
      <Section title="Latest Album" content="Explore SEVENTEEN's newest releases." />
    </div>
  );
};

export default Home;
