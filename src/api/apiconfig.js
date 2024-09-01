// apiconfig.js
import axios from 'axios';

// Comprueba si la variable de entorno está disponible
if (!import.meta.env.VITE_PUBLIC_URL) {
  console.error('REACT_APP_PUBLIC_URL not defined');
}

const baseURL = import.meta.env.VITE_PUBLIC_URL;

const api = axios.create({
  baseURL: baseURL,
});

export default api;
