import auth from "@/apis/auth";
import { setRequestToken } from "@/apis/common";
import { LOGIN, SET_USER, SET_ERROR } from "./type";

const TOKEN = "token";

const state = {
  user: {},
  error: null,
  isAuthenticated: !!localStorage.getItem(TOKEN)
};

const actions = {
  async [LOGIN]({ commit }, data) {
    try {
      const res = await auth.login(data);
      commit(SET_USER, res.user);
    } catch (error) {
      commit(SET_ERROR, error.response.data.errors);
      throw error;
    }
  }
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
    state.isAuthenticated = true;
    localStorage.setItem(TOKEN, user.token);
    setRequestToken(user.token);
  },
  [SET_ERROR](state, error) {
    state.error = error;
  }
};

export default {
  state,
  actions,
  mutations
};
