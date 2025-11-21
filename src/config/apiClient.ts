import type { AxiosInstance, CreateAxiosDefaults } from "axios";
import axios from "axios";

const options: CreateAxiosDefaults = {
  baseURL:
    import.meta.env.MODE === "development" ? "http://localhost:8080/api" : "",
  withCredentials: true,
};

const API: AxiosInstance = axios.create(options);
export default API;
