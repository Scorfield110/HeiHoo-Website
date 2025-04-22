import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Create a styled Box for the hero section
const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://example.com/hero-image.jpg)',  // Add a background image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <div>
        <Typography variant="h2" gutterBottom>
          Welcome to Luxury Hotel
        </Typography>
        <Typography variant="h5" paragraph>
          Experience the best luxury stays with top-class services and comfort.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Book Now
        </Button>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
