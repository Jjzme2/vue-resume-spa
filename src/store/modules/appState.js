const appState = {
  namespaced: true,
  state: {
    loading: false,
    error: null,
    message: null,
  },
  getters: {
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
    getMessage: (state) => state.message,
  },
  mutations: {
    setLoading: (state, data) => {
      state.loading = data;
    },
    setError: (state, data) => {
      state.error = data;
    },
    setMessage: (state, data) => {
      state.message = data;
    },
  },
  actions: {
    setLoading: ({ commit }, data) => {
      commit("setLoading", data);
    },
    setError: ({ commit }, data) => {
      commit("setError", data);
    },
    setMessage: ({ commit }, data) => {
      commit("setMessage", data);
    },
  },
  modules: {},
};

export default appState;
