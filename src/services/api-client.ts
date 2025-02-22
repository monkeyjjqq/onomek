import axios from "axios";

var proxyUrl = import.meta.env.MODE === "production" ? "/api/proxy?path=" : "";
export default axios.create({
  baseURL: proxyUrl + "https://kemono.su/api/v1",
});
