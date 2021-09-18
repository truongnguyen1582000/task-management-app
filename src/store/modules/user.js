import { updateTask, getUserData } from "../../configs/firebase";

const state = () => ({
  info: JSON.parse(localStorage.getItem("userInfo")) || null,
  isAuthenticated: false,
});

const getters = {
  info: (state) => state.info,
  isAuthenticated: (state) => state.isAuthenticated,
};

const mutations = {
  login(state, val) {
    state.info = val;
    localStorage.setItem("userInfo", JSON.stringify(val));
  },

  logout(state) {
    state.info = "";
    localStorage.removeItem("userInfo");
  },

  setAuthenticated(state) {
    state.isAuthenticated = true;
  },

  setStatus(state, taskId) {
    const idx = state.info.tasks.findIndex((task) => task.id === taskId);
    state.info.tasks[idx].isCompleted = !state.info.tasks[idx].isCompleted;
    updateTask(state.info.id, state.info.tasks);
    setTimeout(async () => {
      state.info = await getUserData(state.info.id);
    }, 1000);
    localStorage.setItem("userInfo", JSON.stringify(state.info));
  },

  removeTask(state, taskId) {
    const idx = state.info.tasks.findIndex((task) => task.id === taskId);
    state.info.tasks.splice(idx, 1);
    updateTask(state.info.id, state.info.tasks);
    setTimeout(async () => {
      state.info = await getUserData(state.info.id);
    }, 1000);
    localStorage.setItem("userInfo", JSON.stringify(state.info));
  },

  addNewTask(state, newTask) {
    state.info.tasks.push(newTask);
    updateTask(state.info.id, state.info.tasks);
    setTimeout(async () => {
      state.info = await getUserData(state.info.id);
    }, 1000);
    localStorage.setItem("userInfo", JSON.stringify(state.info));
  },

  async getUserInfo(state) {
    try {
      state.info = await getUserData(state.info.id);
    } catch (err) {
      console.log(err);
    }
  },
};

const actions = {
  getUserInfo({ commit }) {
    commit("getUserInfo");
  },
  login({ commit }, val) {
    commit("login", val);
  },
  logout({ commit }) {
    commit("logout");
  },
  setRole({ commit }, val) {
    commit("setRole", val);
  },
  setAuthenticated({ commit }) {
    commit("setAuthenticated");
  },
  setStatus({ commit }, val) {
    commit("setStatus", val);
  },
  removeTask({ commit }, val) {
    commit("removeTask", val);
  },
  addNewTask({ commit }, val) {
    commit("addNewTask", val);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
