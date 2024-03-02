import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "deaaf7ebbbae4c1ca3d704458d7d581a",
  },
});
