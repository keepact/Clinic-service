import axios from 'axios';

const api = () => {
  return axios.create({ baseURL: process.env.REACT_APP_API });
};

export default api;
