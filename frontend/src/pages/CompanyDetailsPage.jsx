import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CompanyDetailsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Company Details
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Update Company Info
      </Button>
      {/* Add form to manage company details */}
    </Box>
  );
};

export default CompanyDetailsPage;
