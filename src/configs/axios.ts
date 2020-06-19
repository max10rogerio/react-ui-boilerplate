import Axios from "axios";

const API_URL = process.env.API_URL ?? "http://localhost:9999";

export const api = Axios.create({
  baseURL: API_URL,
});
