import axios from "axios";

export default axios.create({
  baseURL: "/api/proxy?path=https://kemono.su/api/v1",
});
