import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';
import logo from '../../assets/images/headerLogo.png';
import '../../styles/Header/Header.scss';

function Header() {
  const navigate = useNavigate();

  return (
    <Box className="header">
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }} className="header-toolbar">
          <Box className="logo-container" sx={{ flexShrink: 0, display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <img
              src={logo}
              alt="IMF Logo"
              className="logo"
              onClick={() => navigate('/')}
            />
          </Box>
          <Box className="nav-links" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box className="nav-item-container">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item nav-item-home active' : 'nav-item nav-item-home')}>
                Home
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                About IMF
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/climbing-in-india" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                About Climbing in India
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/news" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                News
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Contact Us
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/events" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Events
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink to="/imf-mart" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Articles
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;