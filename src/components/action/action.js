import axios from "axios";

const API = axios.create({
  baseURL: "https://lama-hotel-booking-server.vercel.app", // or import.meta.env.VITE_API_BASE_URL for Vite
});

// Register function
export const registerUser = (user) => API.post("/api/auth/register", user);
export const loginUser = (credentials) =>
  API.post("/api/auth/login", credentials);
export const getFaceData = (url) => API.get(url);
