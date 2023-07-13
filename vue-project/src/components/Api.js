import axios from 'axios';

const apiClient =  axios.create({
  baseURL: 'https://3000-dali003-myapp-pb25mfm3chy.ws-eu101.gitpod.io', // Nest.js backend URL
  withCredentials: false,
  headers: {
    'Accept': '*',
    'Content-Type': '*',
    'Access-Control-Allow-Origin':'*'
  },
});

export default apiClient;