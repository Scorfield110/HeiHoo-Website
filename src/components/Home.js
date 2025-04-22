import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const carouselItems = [
    { title: 'Private Bar', image: '/images/ArialBarView.jpg' },
    { title: 'Accomodation', image: '/images/ArialHutsView.jpg' },
    { title: 'Views/Activities', image: '/images/ArialRearView.jpg' },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />

      {/* Hero + Carousel Combined Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(/images/ArialHutsView.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          pt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 6, sm: 8, md: 12 },
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
            }}
          >
            Welcome to Your Stay
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: 'black',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Carousel Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 4 },
            zIndex: 2,
            position: 'relative',
          }}
        >
          {carouselItems.map((item, idx) => {
            const isAccomodation = item.title === 'Accomodation';

            return (
              <Box
                key={idx}
                onClick={() => {
                  if (isAccomodation) navigate('/Accomodation');
                }}
                sx={{
                  width: { xs: '90%', sm: '250px', md: '300px' },
                  border: '1px solid green',
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  cursor: isAccomodation ? 'pointer' : 'default',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: isAccomodation ? 'scale(1.02)' : 'none',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    p: 2,
                    backgroundColor: '#623e2a',
                    color: 'white',
                  }}
                >
                  {item.title}
                </Typography>
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={true}
                  stopOnHover
                  swipeable
                  dynamicHeight={false}
                >
                  {[1, 2].map((num) => (
                    <div key={num}>
                      <img
                        src={item.image}
                        alt={`${item.title} ${num}`}
                        style={{ objectFit: 'cover', height: 250, width: '100%' }}
                      />
                    </div>
                  ))}
                </Carousel>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Footer />

      {/* Developed By Section */}
      <Box
        sx={{
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
            href="https://www.yourportfolio.com"
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
    </Box>
  );
};

export default Home;
