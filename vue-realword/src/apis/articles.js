import requests from "./common";

export const getArticles = (path = "", offset = 0, limit = 10) => {
  return requests.get(`/articles${path}?offset=${offset}&limit=${limit}`).then(res => res.data);
};
