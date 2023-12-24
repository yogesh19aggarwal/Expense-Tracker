import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      localStorage.clear();

      if (window.location.pathname !== "/auth") {
        window.location.href = "/auth";
        toast.error("Session expired! Login again");
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
