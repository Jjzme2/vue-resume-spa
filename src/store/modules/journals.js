import apiService from "../apiService";

const collectionName = "journals";

const journals = {
  namespaced: true,
  state: {
    allItems: [],
  },
  getters: {
    getAll: (state) => {
      if (!state.allItems)
        throw new Error("No data available in journals, please fetchAll first");
      return state.allItems;
    },
    getByField: (state) => (field, value) => {
      if (!field || !value) throw new Error("Field and value are required");
      if (!state.allItems)
        throw new Error("No data available in journals, please fetchAll first");

      const item = state.allItems.find((item) => item[field] === value);

      if (!item) {
        throw new Error(`No item found with ${field} equal to ${value}`);
      }

      return item;
    },
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
        const collection = await apiService.getDocuments(collectionName);

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

export default journals;
