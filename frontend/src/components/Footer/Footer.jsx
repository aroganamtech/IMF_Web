import { NavLink } from 'react-router-dom';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../../styles/Footer/Footer.scss';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className="footer" sx={{ flexShrink: 0 }}>
      <Box
        className="footer-container"
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          padding: '2rem',
          gap: isMobile ? '2rem' : '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Box className="footer-section footer-about" sx={{ flex: isMobile ? 'none' : '1 1 auto', textAlign: isMobile ? 'center' : 'left', minWidth: 0 }}>
          <Typography variant="h6" className="footer-section-title">
            About IMF
          </Typography>
          <Box className="footer-nav-item-container">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              About IMF
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              Contact Us
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/climbing-in-india" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              About Climbing in India
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/membership" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              About Membership
            </NavLink>
          </Box>
        </Box>
        <Box className="footer-section footer-updates" sx={{ flex: isMobile ? 'none' : '1 1 auto', textAlign: isMobile ? 'center' : 'left', minWidth: 0 }}>
          <Typography variant="h6" className="footer-section-title">
            Updates
          </Typography>
          <Box className="footer-nav-item-container">
            <NavLink to="/articles" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              Articles
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/events" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              Events
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/news" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              News
            </NavLink>
          </Box>
        </Box>
        <Box className="footer-section footer-useful-links" sx={{ flex: isMobile ? 'none' : '1 1 auto', textAlign: isMobile ? 'center' : 'left', minWidth: 0 }}>
          <Typography variant="h6" className="footer-section-title">
            Useful Links
          </Typography>
          <Box className="footer-nav-item-container">
            <NavLink to="/faq" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              FAQ
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/articles" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              IMF Mart
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/liaison-officer" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              Liaison Officer
            </NavLink>
          </Box>
          <Box className="footer-nav-item-container">
            <NavLink to="/site-map" className={({ isActive }) => (isActive ? 'footer-nav-item active' : 'footer-nav-item')}>
              Site Map
            </NavLink>
          </Box>
        </Box>
        <Box className="footer-section footer-contact" sx={{ flex: isMobile ? 'none' : '1 1 auto', textAlign: isMobile ? 'center' : 'left', minWidth: 0 }}>
          <Typography variant="h6" className="footer-section-title">
            Contact Details
          </Typography>
          <Typography variant="body2" className="footer-contact-text">
            Indian Mountaineering Foundation<br />
            6, Benito Juarez Marg, South Campus,<br />
            South Moti Bagh, New Delhi, Delhi 110021<br />
            Phone: +9111-2411-1211<br />
            Email: info@imfweb.org
          </Typography>
        </Box>
      </Box>
      <Box className="footer-copyright" sx={{ textAlign: 'center', padding: '1rem' }}>
        <Typography variant="body2">
          © 2025 Indian Mountaineering Foundation. All rights reserved.<br />
          Content Owned by Indian Mountaineering Foundation.<br />
          Site Maintained by Indian Mountaineering Foundation.<br />
          Best Viewed in Google Chrome at resolution 1024 x 768.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;