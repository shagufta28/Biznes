import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const InvoicePage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage Invoices
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Create New Invoice
      </Button>
      {/* Add a table or form to list/manage invoices */}
    </Box>
  );
};

export default InvoicePage;
