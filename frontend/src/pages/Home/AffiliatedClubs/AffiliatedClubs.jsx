import React from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from '@mui/material';
import giripremiLogo from '../../../assets/images/giripremi Logo.png'; 

const theme = createTheme({
  palette: {
    primary: { main: '#1e3a8a' },
    background: { default: '#fff' },
  },
  typography: {
    fontFamily: 'Arial',
  },
});

const clubs = [
  {
    name: 'Giripremi',
    email: 'giripremi@gmail.com',
    phone: '8390655772',
    address: 'Flat no 1, Asmita Society Apte Road, Deccan 411004 Pune Maharashtra',
    description: `Giripremi founded in 1982 with a motto Mountaineering for Joy is working in the field of Hardcore mountaineering with aim to promote this sports and provide platform to new generations...`,
    image: giripremiLogo,
  },
  {
    name: 'Kolkata Trekkers Youth',
    email: 'kolkatatrekkersyouth@gmail.com',
    phone: '7896541023',
    address: 'Flat no 1, Asmita Society Apte Road, Deccan 411004 Pune Maharashtra',
    description:
      'Founded on 4th February, 1985 by a group of young and energetic adventure lovers of Kolkata...',
    image: giripremiLogo,
  },
  {
    name: 'Giripremi',
    email: 'giripremi@gmail.com',
    phone: '8390655772',
    address: 'Flat no 1, Asmita Society Apte Road, Deccan 411004 Pune Maharashtra',
    description: `Giripremi founded in 1982 with a motto Mountaineering for Joy is working in the field of Hardcore mountaineering with aim to promote this sports and provide platform to new generations...`,
    image: giripremiLogo,
  },
  {
    name: 'Giripremi',
    email: 'giripremi@gmail.com',
    phone: '8390655772',
    address: 'Flat no 1, Asmita Society Apte Road, Deccan 411004 Pune Maharashtra',
    description: `Giripremi founded in 1982 with a motto Mountaineering for Joy is working in the field of Hardcore mountaineering with aim to promote this sports and provide platform to new generations...`,
    image: giripremiLogo,
  },
];

const ClubCard = ({ club }) => (
  <Box
    sx={{
      border: '1px solid #ccc',
      borderRadius: 1,
      mb: 4,
    }}
  >
    {/* Header with Club Name & Email */}
    <Box
      sx={{
        backgroundColor: '#cce5f6',
        px: 2,
        py: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {club.name}
      </Typography>
      <Typography variant="body2">
        <strong>E-Mail:</strong>{' '}
        <a href={`mailto:${club.email}`}>{club.email}</a>
      </Typography>
    </Box>

    {/* Description and Logo */}
    <Box
      sx={{
        p: 2,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: '1 1 70%' }}>
        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {club.description}
        </Typography>
      </Box>

      <Box sx={{ flex: '1 1 150px', textAlign: 'right' }}>
        <Box
          component="img"
          src={club.image}
          alt={`${club.name} logo`}
          sx={{
            width: 100,
            height: 100,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>

    {/* Address and Phone Section */}
    {(club.address || club.phone) && (
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {club.address && (
          <Typography sx={{ fontWeight: 'bold' }}>{club.address}</Typography>
        )}
        {club.phone && (
          <Typography>
            <strong>Phone:</strong> {club.phone}
          </Typography>
        )}
      </Box>
    )}
  </Box>
);

function RegisteredClubsPage() {
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'orange' }}
        >
          REGISTERED CLUBS
        </Typography>

        {clubs.map((club, idx) => (
          <ClubCard club={club} key={idx} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default RegisteredClubsPage;
