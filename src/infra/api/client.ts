import axios from 'axios';

const BackendClient = axios.create({
  baseURL: `http://localhost:8888/api/V1`,
//   baseURL: `${process.env.VITE_API_URL ?? '/'}/api/V1`,
  timeout: 10000,
 
});

 

export default BackendClient;