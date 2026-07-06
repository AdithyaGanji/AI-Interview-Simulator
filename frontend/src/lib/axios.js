import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? "http://localhost:8080/" : "/"
});
