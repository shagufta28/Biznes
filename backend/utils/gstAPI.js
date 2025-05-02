// utils/gstAPI.js (A utility file to handle API request)
const axios = require('axios');

const getGSTDetails = async (gstin) => {
  try {
    // Replace with actual GSTN API URL or third-party API
    const response = await axios.get(`https://api.gstn.com/gstin/${gstin}`);
    return response.data; // Mocked response, adjust based on actual API
  } catch (error) {
    throw new Error('Failed to fetch GST details: ' + error.message);
  }
};

module.exports = getGSTDetails;
