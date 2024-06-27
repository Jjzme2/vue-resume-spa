import {
  initAuth0,
  loginWithRedirect,
  logout as auth0Logout,
  getUser,
  isAuthenticated,
} from "/services/authService";

const authentication = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: null,
    loading: true,
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, data) {
      state.user = data;
      state.isAuthenticated = !!data;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async initAuth({ commit }) {
      commit("setLoading", true);

      try {
        await initAuth0();
        const authStatus = await isAuthenticated();
        commit("setAuthenticated", authStatus);

        if (authStatus) {
          const user = await getUser();
          commit("setUser", user);
        }
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async login({ commit }) {
      commit("setLoading", true);
      try {
        await loginWithRedirect();
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async logout({ commit }) {
      commit("setLoading", true);
      try {
        await auth0Logout();
        commit("setAuthenticated", false);
        commit("setUser", null);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
    async register({ commit }) {
      commit("setLoading", true);
      try {
        await loginWithRedirect({
          screen_hint: "signup",
        });
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
};

export default authentication;
