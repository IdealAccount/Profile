import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    authorized: false
  },
  mutations: {
    registrationUser(state, user) {
      state.users.push(user);
    },
    AUTHORISATION_USER(state) {
      state.authorized = true
    },
    logout(state) {
      state.authorized = false;
    }
  },
  actions: {

  },
  getters: {
    users: state => state.users,
    userExist: state => data => state.users.find(user => user.password === data.password),
    userAuthorized: state => state.authorized
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
