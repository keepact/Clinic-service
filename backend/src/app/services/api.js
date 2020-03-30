import axios from 'axios';

export default axios.create({
  baseURL: process.env.CLINIC_API,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': process.env.API_SECRET,
  },
});
