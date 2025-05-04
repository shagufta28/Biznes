import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const BillingPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Billing Information
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Update Billing Info
      </Button>
      {/* Add form or content related to billing */}
    </Box>
  );
};

export default BillingPage;
