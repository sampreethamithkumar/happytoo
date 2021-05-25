import axios from "axios";

axios.defaults.baseURL = "https://tranquil-escarpment-11384.herokuapp.com/api";

export default {
  post: axios.post,
};
