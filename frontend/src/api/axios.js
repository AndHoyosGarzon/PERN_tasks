import axios from "axios";

//create instance for axios
const client = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default client;
