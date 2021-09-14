const state = () => ({
  userId: localStorage.getItem("userId") || "",
});

const getters = {
  userId: (state) => state.userId,
};

const mutations = {
  login(state, val) {
    state.userId = val;
    localStorage.setItem("userId", val);
  },
  logout(state) {
    state.userId = "";
    localStorage.setItem("userId", "");
  },
};

const actions = {
  login({ commit }, val) {
    commit("login", val);
  },
  logout({ commit }) {
    commit("logout");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
