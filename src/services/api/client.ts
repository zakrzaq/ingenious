import axios from "axios";

const defaultClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

export { defaultClient as client };
