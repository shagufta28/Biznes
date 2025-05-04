import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5">Biznes Dashboard</Typography>
        </Box>
        <List>
          <ListItem button component={Link} to="/dashboard/invoice">
            <ListItemText primary="Invoice" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/billing">
            <ListItemText primary="Billing" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/company-details">
            <ListItemText primary="Company Details" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', padding: 3 }}
      >
        <Outlet /> {/* Dynamic content will render here */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
