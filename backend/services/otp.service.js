// otp.service.js
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert('./firebase-key.json'),  // Correct path
});

exports.sendOTP = async (phoneNumber) => {
  try {
    // Firebase phone authentication
    const phoneAuthProvider = admin.auth().generateSignInWithPhoneNumberLink(phoneNumber);

    // This generates an OTP automatically when sending an SMS.
    // Firebase Authentication will send the OTP code to the user's phone number
    console.log(`OTP sent to ${phoneNumber}`);

    return phoneAuthProvider;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
};
