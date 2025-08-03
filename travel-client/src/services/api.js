import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// AUTH
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// TRIPS
export const getTrips = () => API.get('/trips');
export const createTrip = (tripData) => API.post('/trips', tripData);
