import { getArticles } from "@/apis/articles";
import { getTags } from "@/apis/tags";
import { addFavorite, removeFavorite } from "@/apis/favorite";
import {
  GET_ARTICLES,
  SET_ARTICLES_DATA,
  CHANGE_LOADING_STATE,
  GET_TAGS,
  SET_TAGS_DATA,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_ARTICLES
} from "./type";

const state = {
  articlesCount: 0,
  articles: [],
  tags: [],
  loading: false
};

const actions = {
  async [GET_ARTICLES]({ commit }, { offset, limit, path, tag }) {
    commit(CHANGE_LOADING_STATE, true);
    const data = await getArticles(path, offset, limit, tag);
    commit(SET_ARTICLES_DATA, data);
    commit(CHANGE_LOADING_STATE, false);
  },

  async [GET_TAGS]({ commit }) {
    const tags = await getTags();
    commit(SET_TAGS_DATA, tags);
  },

  async [ADD_FAVORITE]({ commit }, { slug }) {
    const { article } = await addFavorite(slug);
    commit(UPDATE_ARTICLES, article);
  },

  async [REMOVE_FAVORITE]({ commit }, { slug }) {
    const { article } = await removeFavorite(slug);
    commit(UPDATE_ARTICLES, article);
  }
};

const mutations = {
  [SET_ARTICLES_DATA](state, { articlesCount, articles }) {
    state.articlesCount = articlesCount;
    state.articles = articles;
  },
  [CHANGE_LOADING_STATE](state, status) {
    state.loading = status;
  },
  [SET_TAGS_DATA](state, { tags }) {
    state.tags = tags;
  },
  [UPDATE_ARTICLES](state, { slug, favorited, favoritesCount }) {
    state.articles = state.articles.map(article => {
      if (article.slug === slug) {
        return { ...article, favorited, favoritesCount };
      }
      return article;
    });
  }
};

export default {
  state,
  actions,
  mutations
};
