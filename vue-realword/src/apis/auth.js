import requests from "./common";

const login = data => {
  const body = {
    user: data
  };
  return requests.post("/users/login", body).then(res => res.data);
};

export default {
  login
};
