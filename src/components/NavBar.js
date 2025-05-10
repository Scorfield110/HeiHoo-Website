import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';//Get Current Path




function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme(); // Access the theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen width is small (mobile)
  const location=useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '#' },
    { text: 'Accommodation', link: '/Accommodation' },
    { text: 'The Bar', link: '#' },
    { text: 'Contact', link: '#' },
    { text: 'Find Us', link: '#' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#623e2a" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hei Hoo!
        </Typography>

        {/* Hamburger Menu for Mobile */}
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop Navigation Buttons
          navLinks.map((link) => (
  <Button
    key={link.text}
    color="inherit"
    component={Link}
    to={link.link}
    sx={{
      color: location.pathname === link.link ? 'yellow' : 'inherit',
      fontWeight: 'normal',
      textDecoration: 'none',
      '&:hover': {
        fontWeight: 'bold',
        textDecoration: 'overline',
      },
    }}
  >
    {link.text}
  </Button>
))

        )}
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer 
      anchor="right" 
      open={drawerOpen} 
      onClose={handleDrawerToggle}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
        <ListItem
        key={link.text}
        button={true} // ✅ This is the key change
        component={Link}
        to={link.link}
        onClick={handleDrawerToggle}
      >
        <ListItemText primary={link.text} />
      </ListItem>
      
       
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
