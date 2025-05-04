import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    // Add login logic (e.g., verify credentials with API)
    console.log(credentials);
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleLogin}>
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
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button type="button" variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
