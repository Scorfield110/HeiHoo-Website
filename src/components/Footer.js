import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#623e2a',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 1, sm: 1 },
        mt: 'auto',
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
      >
        {[
          {
            title: 'Reservation Office',
            content: (
              <>
                <Box display="flex" alignItems="center" mb={1}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">Ts'ehlanyane Pela Ts'oeu</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">+266 63055191</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">mapeetej@gmail.com</Typography>
                </Box>
              </>
            ),
            button: 'Learn More',
          },
          {
            title: 'Office Hours',
            content: (
              <Typography variant="body2">
                Monday - Friday <br />
                9:00am - 6:00pm SAST <br />
                Saturday <br />
                9:00am - 12:00pm SAST
              </Typography>
            ),
            button: 'Discover More',
          },
          {
            title: 'Get Social',
            content: (
              <>
                <Box display="flex" alignItems="center" mb={1}>
                  <FaFacebook style={{ marginRight: 8 }} />
                  <Typography variant="body2">Hei Hoo</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <FaWhatsapp style={{ marginRight: 8 }} />
                  <Typography variant="body2">+266 63055191</Typography>
                </Box>
              </>
            ),
            button: 'Tag us in your photos',
          },
        ].map((section, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#623e2a',
                boxShadow: 'none',
                height: '100%',
              }}
            >
              <CardContent sx={{ color: 'white', px: 0 }}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                {section.content}
                <Button size="small" sx={{ mt: 2, color: 'white' }}>
                  {section.button}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Footer;
