import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://chat-app-server-jebrg.herokuapp.com/"
});

export default axiosInstance;
