const otpService = require('../services/otp.service'); // Your OTP service that handles sending OTP

exports.sendOTP = async (req, res) => {
  const { phoneNumber } = req.body; // Destructure phoneNumber from request body

  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    // Call your OTP service to send the OTP
    const otp = await otpService.sendOTP(phoneNumber);

    // If OTP is sent successfully, send a response
    return res.status(200).json({ message: "OTP sent successfully", otp });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
