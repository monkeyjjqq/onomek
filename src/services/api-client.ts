import axios from "axios";

var proxyUrl = import.meta.env.MODE === "production" ? "/api/proxy" : "https://kemono.cr/api/v1";
export default axios.create({
  baseURL: proxyUrl,
});
