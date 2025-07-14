import React from 'react';
import { Box } from '@mui/material';
import CarouselSection from './CarouselSection';
import ContentSection from './ContentSection';
import '../../styles/Home/Home.scss';

function Home() {
  return (
    <Box className="home">
      <CarouselSection />
      <ContentSection />
    </Box>
  );
}

export default Home;