import type { AxiosInstance, CreateAxiosDefaults } from "axios";
import axios from "axios";

const options: CreateAxiosDefaults = {
  baseURL:
    import.meta.env.MODE === "development" ? "http://localhost:8080/api" : "",
  withCredentials: true,
};

const API: AxiosInstance = axios.create(options);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
