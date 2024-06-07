import axios from "axios";

const url =
  "https://online-json-server-api.up.railway.app/project/665eff2b1d2cd3eb1142aa96";
export const customFetch = axios.create({
  baseURL: url,
});
