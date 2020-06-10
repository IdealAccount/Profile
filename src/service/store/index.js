import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    login: false
  },
  mutations: {
    registrationUser(state, user) {
      state.users.push(user);
    },
    loginUser(state) {
      state.login = true
    },
    logout(state) {
      state.login = false;
    }
  },
  actions: {

  },
  getters: {
    users: state => state.users,
    userExist: state => data => state.users.find(user => user.password === data.password),
    userAuthorized: state => state.login
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
