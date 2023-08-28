import axios from "axios";

export const apiFeed = axios.create({
  baseURL: "https://kenzie-feed-api.onrender.com/",
  timeout: 8 * 1000,
});
