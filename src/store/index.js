import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAutorized: false,
    toLogin: true,
    toRegistration: false,
    isErrorForm: false,
    errorFormText: '',
    currentUser: {
    },
    users: [
      {
        id: 1,
        login: 'admin',
        password: 'admin',
        email: 'admin@mail.ru',
        firstName: 'Александр',
        lastName: 'Александрович',
      },
      {
        id: 2,
        login: 'admin2',
        password: 'admin2',
        email: 'admin2@mail.ru',
        firstName: 'Александр',
        lastName: 'Александрович',
      },
    ],
  },
  mutations: {
    toggleAutorized(state) {
      state.isAutorized = !state.isAutorized;
    },
    toRegistration(state) {
      state.toRegistration = true;
      state.toLogin = false;
    },
    toLogin(state) {
      state.toRegistration = false;
      state.toLogin = true;
    },
    registration(state, payload) {
      const newUser = {
        id: Date.now(),
        login: payload.login,
        password: payload.password,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName ?? '',
      };
      state.users.push(newUser);
      state.currentUser = newUser;
      state.isAutorized = true;
      state.toRegistration = false;
      document.cookie = `adminUserId=${newUser.id}`;
    },
    login(state, payload) {
      const returnedUser = state.users.filter((user) => (
        user.password === payload.password && user.login === payload.login
      ))[0];
      if (returnedUser.length !== 0) {
        state.currentUser = returnedUser;
        state.isAutorized = true;
        state.toLogin = false;
        document.cookie = `adminUserId=${returnedUser.id}`;
      }
    },
    cookieLogin(state, payload) {
      const returnedUser = state.users.filter((user) => (
        user.id === payload
      ))[0];
      state.currentUser = returnedUser;
      state.isAutorized = true;
      state.toLogin = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
