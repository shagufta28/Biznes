import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // or your backend URL
});

export default API;
