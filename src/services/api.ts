import axios from "axios";

axios.defaults.params = {};
axios.defaults.params["apikey"] = "6d07a65acb9a5be02fa7e65351c5169c";

export const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});
