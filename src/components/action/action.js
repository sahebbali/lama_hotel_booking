import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // or import.meta.env.VITE_API_BASE_URL for Vite
});

// Register function
export const registerUser = (user) => API.post("/auth/register", user);
export const loginUser = (credentials) => API.post("/auth/login", credentials);
