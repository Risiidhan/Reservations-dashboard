import axios from 'axios';
import { handleApiError } from './handleApiError';


const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(handleApiError(error)) 
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    const formattedError = handleApiError(error);
    return Promise.reject(formattedError);
  }
);

export default apiClient;
