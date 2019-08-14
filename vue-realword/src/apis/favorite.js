import requests from "./common";

export const addFavorite = slug => {
  return requests.post(`/articles/${slug}/favorite`).then(res => res.data);
};

export const removeFavorite = slug => {
  return requests.delete(`/articles/${slug}/favorite`).then(res => res.data);
};
