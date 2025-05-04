import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    // Add signup logic (e.g., send data to backend)
    console.log(credentials);
    navigate('/dashboard'); // Redirect to dashboard after successful signup
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <Box component="form" onSubmit={handleSignup}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button type="button" variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSignup}>
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default SignupPage;
