import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full  h-[900px]">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="imgs-page/logo-page.png" // Replace with a poster image for browsers that don't support video autoplay
      >
        <source src="imgs-page/video-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Sneaker Fantasy</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Discover the latest trends in footwear fashion.</p>
      </div>
    </section>
  );
};

export default Hero;