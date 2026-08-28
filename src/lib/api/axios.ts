import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog.myethica.net/api/v1/",
});

export default axiosInstance;
