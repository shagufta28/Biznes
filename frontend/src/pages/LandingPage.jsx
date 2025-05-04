import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Biznes
      </Typography>
      <Typography variant="h6" paragraph>
        Manage your business, invoices, and more with ease.
      </Typography>
      <Box>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </Button>
        <Button variant="outlined" color="primary">
          <Link to="/signup" style={{ color: 'blue', textDecoration: 'none' }}>Signup</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
