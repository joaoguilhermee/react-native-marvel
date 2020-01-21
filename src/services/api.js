import axios from "axios";
import md5 from "md5";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/"
});
const ts = new Date().getTime();
const hash = md5(
  ts +
    "c348ea7b25331401da0240cbe3b27c88f3a14949" +
    "d92d3fd55c235b7a6b585b79a29dbee5"
);
api.interceptors.request.use(
  function(config) {
    return {
      ...config,
      url:
        config.url +
        `&apikey=d92d3fd55c235b7a6b585b79a29dbee5&ts=${ts}&hash=${hash}`
    };
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default api;
