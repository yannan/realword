import axios from "axios";

const token = window.localStorage.getItem("token");

const requests = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  headers: token
    ? {
        Authorization: `Token ${token}`
      }
    : {}
});

export const setRequestToken = tokenStr => {
  requests.defaults.headers.Authorization = `Token ${tokenStr}`;
};

export default requests;
