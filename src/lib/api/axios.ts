import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://blog-api.msgly.ng/api/v1/",
});

export default axiosInstance;
