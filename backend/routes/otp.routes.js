// otp.routes.js
const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otp.controller'); // Ensure path is correct

// Route to send OTP
router.post('/send-otp', otpController.sendOTP); // Make sure sendOTP is a function

module.exports = router;
