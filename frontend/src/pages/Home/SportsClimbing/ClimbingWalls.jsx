import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#003087', 
    },
    background: {
      default: '#e9efff', 
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    h4: { fontWeight: 700 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
  },
});

const SectionCard = ({ title, children }) => (
  <Card sx={{ mb: 4, p: 3, borderRadius: 3, backgroundColor: '#ffffff', boxShadow: 3 }}>
    <CardContent>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Box sx={{ width: '4px', height: '100%', backgroundColor: 'primary.main', mr: 2 }} />
        <Typography variant="h6" color="primary" sx={{ fontWeight: 600, fontSize: '1.3rem' }}>
          {title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      {children}
    </CardContent>
  </Card>
);

function ClimbingWalls() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 5, fontWeight: 'bold' }}
        >
          CLIMBING WALLS
        </Typography>

        <SectionCard title="Climbing Wall Timings">
          <Typography variant="body1" paragraph>
            Sport Climbing wall is available all days except Mondays. Timings are:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>October to March:</strong> 08:00 AM to 12:00 PM and 03:00 PM to 07:00 PM
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>April to September:</strong> 06:30 AM to 10:30 AM and 05:00 PM to 09:00 PM
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Fees:</strong> ₹300/- per person per session.
          </Typography>
          <Typography variant="body1" paragraph>
            For groups (minimum 30), activities are available such as Sport Climbing, Burma Bridge,
            Tyre Swing, Tyroleon Travers (Rope Crossing), Commando Net, Rope Ladder, Crawling
            through tunnel, natural rocks etc. <strong>Prior intimation is required.</strong>
          </Typography>
        </SectionCard>
      </Container>
    </ThemeProvider>
  );
}

export default ClimbingWalls;
