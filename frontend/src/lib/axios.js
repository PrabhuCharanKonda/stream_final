import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://stream-final-back.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
