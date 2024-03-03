import apiService from "../apiService";

const interests = {
  namespaced: true,
  state: {
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
  },
  actions: {
    async fetchAll({ commit }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const collection = await apiService.getDocuments("interests");

        if (!Array.isArray(collection)) {
          throw new Error("Received invalid data from the API");
        }

        commit("setAll", collection);
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
      } finally {
        commit("appState/setLoading", false, { root: true });
      }
    },
  },
};

export default interests;
