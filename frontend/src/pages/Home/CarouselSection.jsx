import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import '../../styles/Home/CarouselSection.scss';

function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    {
      url: 'https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg',
      caption: 'Explore the Himalayas',
    },
    {
      url: 'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg',
      caption: 'Climb with IMF',
    },
    {
      url: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg',
      caption: 'Adventure Awaits',
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true); // Pause auto-slide on manual interaction
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setIsPaused(true);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isPaused, activeIndex]);

  return (
    <Box
      className="carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Box className="carousel-image-container">
        {images.map((image, index) => (
          <Box
            key={index}
            className={`carousel-image-wrapper ${index === activeIndex ? 'active' : ''}`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            <Typography className="carousel-caption" variant="h6">
              {image.caption}
            </Typography>
          </Box>
        ))}
        <Box
          className="carousel-arrow-left"
          onClick={handlePrev}
          sx={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        >
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 24l-8-8 8-8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
        <Box
          className="carousel-arrow-right"
          onClick={handleNext}
          sx={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        >
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24l8-8-8-8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
      </Box>
      <Box className="carousel-dots" sx={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
        {images.map((_, index) => (
          <Box
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            sx={{ cursor: 'pointer' }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CarouselSection;