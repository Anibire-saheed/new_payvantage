import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://blog-api.msgly.ng/api/v1/",
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK" || error.message === "Network Error") {
      console.warn(
        "Network Error: Unable to reach backend API at",
        axiosInstance.defaults.baseURL
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
