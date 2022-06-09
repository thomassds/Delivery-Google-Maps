
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

const geolocation = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/"
});

export { api, geolocation };