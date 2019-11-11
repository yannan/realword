import { getArticleDetail } from "../apis/articles";
import { GET_ARTICLE_DETAIL, SET_ARTICLE_DETAIL_DATA } from "./type";

const state = {
  article: {}
};

const actions = {
  async [GET_ARTICLE_DETAIL]({ commit }, id) {
    const { article } = await getArticleDetail(id);
    commit(SET_ARTICLE_DETAIL_DATA, article);
  }
};

const mutations = {
  [SET_ARTICLE_DETAIL_DATA](state, article) {
    state.article = article;
  }
};

export default {
  state,
  actions,
  mutations
};
