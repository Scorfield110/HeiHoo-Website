import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
//import GalaxyWallpaper from './images/Galaxy-Wallpaper.jpg';

const HotelCard = ({ image, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          R{price} per night
        </Typography>
        <Button variant="contained" sx={{ marginTop: 4, marginLeft:13,backgroundColor: '#e5aa70' }} >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
