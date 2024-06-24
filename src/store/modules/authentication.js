// store/modules/authentication.js

const authentication = {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
      state.isAuthenticated = !!data;
    },
  },
  actions: {
    async login({ commit }, { loginWithRedirect }) {
      commit("setLoading", true, { root: true });
      commit("setError", null, { root: true });

      try {
        await loginWithRedirect({
          appState: { target: "/" },
        });
        // user data will be set in the component through the Auth0 hook and watch mechanism
      } catch (error) {
        commit("setError", error.message, { root: true });
      } finally {
        commit("setLoading", false, { root: true });
      }
    },

    async logout({ commit }, { logout }) {
      commit("setLoading", true, { root: true });
      commit("setError", null, { root: true });

      try {
        await logout({
          returnTo: window.location.origin,
        });
        commit("setUser", null);
      } catch (error) {
        commit("setError", error.message, { root: true });
      } finally {
        commit("setLoading", false, { root: true });
      }
    },
  },
};

export default authentication;
