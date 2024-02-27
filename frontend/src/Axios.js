import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2000/api",
  headers: {
    "Content-Length": "application/json",
  },

  withCredentials: true,
});

export default instance;
