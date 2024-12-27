import axios from "axios";
const API_BASE_URL = "https://dummyjson.com/";

export let client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});
