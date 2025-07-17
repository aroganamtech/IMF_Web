import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Divider,
  Button,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a8a', // Dark blue
    },
    secondary: {
      main: '#0d47a1',
    },
    background: {
      default: '#f3f8ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    h4: { fontWeight: 700, fontSize: '2rem' },
    subtitle1: { fontWeight: 600, fontSize: '1.2rem' },
    body2: { fontSize: '0.9rem', color: '#444' },
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
  borderRadius: '12px',
  backgroundColor: '#f9fbfd',
}));

const clubs = [
  {
    name: 'Giripremi',
    location: 'Pune, Maharashtra',
    description:
      'Founded in 1992 as a mountaineering club to promote adventure sports. Organized expeditions to Mt. Everest, K2, and others. Offers training in mountaineering, rock climbing, and rescue.',
    image: 'https://via.placeholder.com/100x100.png?text=Giripremi', // Corrected to unique placeholder
    address: 'Flat No. 1, Aashirwad Road, Deccan 411004 Pune Maharashtra',
    email: 'giripremi@gmail.com',
    phone: '9823096727',
    website: '',
  },
  {
    name: 'Founders',
    location: 'Kolkata, West Bengal',
    description:
      'Founded by a group of adventure lovers from Kolkata. Works with West Bengal Youth Services & Mountaineering Association.',
    image: 'https://via.placeholder.com/100x100.png?text=Founders',
    address: '172 O.T. Road, P.O. Belurmath 700201 Kolkata West Bengal',
    email: 'founders@gmail.com',
    phone: '09512464',
    website: '',
  },
  {
    name: 'STEPP',
    location: 'Chennai, Tamil Nadu',
    description:
      'Society for Trekking & Environmental Preservation (STEPP) focuses on environment and nature preservation through trekking and camping.',
    image: 'https://via.placeholder.com/100x100.png?text=STEPP',
    address: 'Indian Mountaineering Foundation, Benito Juarez Road, New Delhi',
    email: 'stepp@gmail.com',
    phone: '09916441',
    website: '',
  },
];

const ClubCard = ({ club }) => (
  <StyledCard sx={{ mb: 4, p: 2 }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {club.name}{' '}
            <span style={{ color: '#777', fontWeight: 400 }}>
              ({club.location})
            </span>
          </Typography>
          <Typography variant="body2" paragraph>{club.description}</Typography>
          <Typography variant="body2">Address: {club.address}</Typography>
          <Typography variant="body2">
            Email:{' '}
            <a
              href={`mailto:${club.email}`}
              style={{ color: theme.palette.secondary.main }}
            >
              {club.email}
            </a>
          </Typography>
          <Typography variant="body2">Phone: {club.phone}</Typography>
          {club.website && (
            <Typography variant="body2">
              Website:{' '}
              <a
                href={club.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.palette.secondary.main }}
              >
                {club.website}
              </a>
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            component="img"
            src={club.image}
            alt={`${club.name} logo`}
            sx={{
              width: 100,
              height: 100,
              objectFit: 'contain',
              borderRadius: 2,
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              display: 'block',
              ml: 'auto', // Aligns image to the right
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/100x100.png?text=Image+Not+Found';
            }} // Fallback for failed images
          />
        </Grid>
      </Grid>
    </CardContent>
  </StyledCard>
);

function AffiliatedClubs() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default, pt: 4 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              bgcolor: 'white',
              py: 2,
              mb: 4,
              boxShadow: 1,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Registered Clubs
            </Typography>
          </Box>

          <Grid container spacing={isSmallScreen ? 2 : 4}>
            {clubs.map((club, index) => (
              <Grid item xs={12} key={index}>
                <ClubCard club={club} />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6 }} />
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Button variant="contained" color="primary" href="#top">
              Back to Top
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default AffiliatedClubs;