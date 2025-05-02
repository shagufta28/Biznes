const axios = require('axios');

const API_KEY = 'svIEHQCR0eMOuw0HgLYsCzR47D63'; // Your actual key
const BASE_URL = `https://sheet.gstincheck.co.in/check/${API_KEY}`;

const verifyGSTIN = async (gstin) => {
  try {
    const url = `${BASE_URL}/${gstin}`;
    const response = await axios.get(url);

    if (response.data && response.data.status === "1") {
      return {
        success: true,
        data: response.data.data
      };
    } else {
      return {
        success: false,
        error: response.data.ErrorDetails || 'Invalid GSTIN'
      };
    }
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
};

module.exports = verifyGSTIN;
