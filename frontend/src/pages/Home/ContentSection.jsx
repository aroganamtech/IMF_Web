import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../../styles/Home/ContentSection.scss';

function ContentSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="content-section" sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" className="content-title">
        Welcome to Indian Mountaineering Foundation
      </Typography>
      <Typography variant="h5" className="content-subtitle" sx={{ marginBottom: '1.5rem' }}>
        Apex National Body
      </Typography>
      <Typography variant="body1" className="content-description" sx={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        Indian Mountaineering Foundation (IMF) is the apex national body for mountaineering and allied sports. What was initially formed as the 'Sponsoring Committee of the Cho Oyu Expedition', transformed into the IMF on 5th January, 1961, as we know it today. IMF supports, promotes and regulates national and international climbing and mountaineering in India and is affiliated to the UIAA (International Mountaineering and Climbing Federation). IMF is also the regulatory body for the competitive Olympic sport of Sport Climbing and is affiliated to the IFSC (International Federation of Sport Climbing). IMF is also engaged in mountain protection work, knowledge building and creating awareness of the Indian Himalaya.
      </Typography>
      <Box
        className="content-nav"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: isMobile ? '0.5rem' : '1rem',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Box className="content-nav-item-container">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            About IMF
          </NavLink>
        </Box>
        <Box className="content-nav-item-container">
          <NavLink to="/learning" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            Learning
          </NavLink>
        </Box>
        <Box className="content-nav-item-container">
          <NavLink to="/membership" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            Membership
          </NavLink>
        </Box>
        <Box className="content-nav-item-container">
          <NavLink to="/network" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            Network
          </NavLink>
        </Box>
        <Box className="content-nav-item-container">
          <NavLink to="/library" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            Library
          </NavLink>
        </Box>
        <Box className="content-nav-item-container">
          <NavLink to="/grievance" className={({ isActive }) => (isActive ? 'content-nav-item active' : 'content-nav-item')}>
            Grievance
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentSection;