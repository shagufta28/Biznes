import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'; // Create this page
import SignupPage from './pages/SignupPage'; // Create this page
import DashboardLayout from './pages/Dashboard';
import InvoicePage from './pages/InvoicePage'; // Create this page
import BillingPage from './pages/BillingPage'; // Create this page
import CompanyDetailsPage from './pages/CompanyDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="billing" element={<BillingPage />} />
          <Route path="company-details" element={<CompanyDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
