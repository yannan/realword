import requests from "./common";

export const getTags = () => {
  return requests.get(`/tags`).then(res => res.data);
};
