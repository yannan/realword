import requests from "./common";

export const getArticles = (path = "", offset = 0, limit = 10, tag = "") => {
  return requests
    .get(`/articles${path}?offset=${offset}&limit=${limit}${tag ? "&tag=" + tag : tag}`)
    .then(res => res.data);
};
