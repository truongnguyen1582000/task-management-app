import { getAllProfileData } from "../../configs/firebase";

const state = () => ({
  all: JSON.parse(localStorage.getItem("profiles")) || [],
});

const getters = {
  all: (state) => state.all,
};

const mutations = {
  async getAllProfile(state) {
    state.all = await getAllProfileData();
    localStorage.setItem("profiles", JSON.stringify(state.all));
  },
};

const actions = {
  getAllProfile({ commit }) {
    commit("getAllProfile");
  },
  getUserProfile({ commit }) {
    commit("getUserProifle");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
