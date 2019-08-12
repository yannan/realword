import { getArticles } from "@/apis/articles";
import { getTags } from "@/apis/tags";
import {
  GET_ARTICLES,
  SET_ARTICLES_DATA,
  CHANGE_LOADING_STATE,
  GET_TAGS,
  SET_TAGS_DATA
} from "./type";

const state = {
  articlesCount: 0,
  articles: [],
  tags: [],
  loading: false
};

const actions = {
  async [GET_ARTICLES]({ commit }, { offset, limit, path }) {
    commit(CHANGE_LOADING_STATE, true);
    const data = await getArticles(path, offset, limit);
    commit(SET_ARTICLES_DATA, data);
    commit(CHANGE_LOADING_STATE, false);
  },

  async [GET_TAGS]({ commit }) {
    const tags = await getTags();
    commit(SET_TAGS_DATA, tags);
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
  }
};

export default {
  state,
  actions,
  mutations
};
