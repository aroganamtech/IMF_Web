import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import logo from "../../assets/images/headerLogo.png";
import "../../styles/Header/Header.scss";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className="header">
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          sx={{ display: "flex", alignItems: "center" }}
          className="header-toolbar"
        >
          <Box
            className="logo-container"
            sx={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              marginRight: "auto",
            }}
          >
            <img
              src={logo}
              alt="IMF Logo"
              className="logo"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            />
          </Box>
          <IconButton
            className="menu-toggle"
            sx={{ display: { xs: "block", md: "none" }, color: "#FFFFFF" }}
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Box
            className={`nav-links ${isMenuOpen ? "open" : ""}`}
            sx={{
              display: { xs: isMenuOpen ? "flex" : "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box className="nav-item-container">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-item nav-item-home active"
                    : "nav-item nav-item-home"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About IMF
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/climbing-in-india"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Climbing in India
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </NavLink>
            </Box>
            <Box className="nav-item-container">
              <NavLink
                to="/imf-mart"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
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
