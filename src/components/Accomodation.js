import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import NavBar from './NavBar';
import HotelCard from './HotelCard';
import Footer from './Footer';
//npm import NavBar from './components/NavBar.tsx';


function Accomodations() {
  return (
    <div>
      {/* Hero Section */}
      <NavBar />

      <Container
  sx={{
    mt: 0,
    backgroundColor: '#efebe5', 
    //height: '100vh', // Full viewport height
    width: '100%', // Full viewport width
    padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
    display: 'flex', // Flexbox layout
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Vertically center content
    alignItems: 'center', // Horizontally center content
    maxWidth: 'none', // Remove the default maxWidth from Material-UI container
  }}>
        <Typography variant="h4" gutterBottom align="center">
          Accommodation
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <HotelCard
              image="/images/bed1.jpg"
              title="Hut 1"
              description="2 Adults | 1 Child [ 0 - 7 years ]"
              price={250}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <HotelCard
              image="/images/bed2.jpg"
              title="City View Room"
              description="2 Adults | 1 Child [ 0 - 7 years ]"
              price={200}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <HotelCard
              image="/images/bed3.jpg"
              title="Luxury Suite"
              description="4 Adults | 2 Children [ 0 - 7 years ]"
              price={500}
            />
          </Grid>
        </Grid>
      </Container>

      

      {/* Footer */}
      <Footer />

      {/* Developed By Section */}
      <Box
        sx={{
          marginTop: 0,
          textAlign: 'center',
          color: 'white',
          fontSize: '14px',
          backgroundColor: '#623e2a',
          padding: '10px 0',
        }}
      >
        <Typography variant="body2" sx={{ color: 'white' }}>
          © {new Date().getFullYear()} Developed by{' '}
          <a
            href="https://www.yourportfolio.com" // Link to your portfolio or company site
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#e5aa70',
              textDecoration: 'none',
            }}
          >
            Sigma
          </a>
        </Typography>
      </Box>
    </div>
  );
}

export default Accomodations;


