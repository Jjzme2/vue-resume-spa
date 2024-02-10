const appState = {
  namespaced: true,
  state: {
    loading: false,
    error: null,
  },
  getters: {
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  mutations: {
    setLoading: (state, data) => {
      state.loading = data;
    },
    setError: (state, data) => {
      state.error = data;
    },
  },
  actions: {
    setLoading: ({ commit }, data) => {
      commit("setLoading", data);
    },
    setError: ({ commit }, data) => {
      commit("setError", data);
    },
  },
  modules: {},
};

export default appState;
