import apiService from "../apiService";

const subscribers = {
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
        const collection = await apiService.getDocuments("subscribers");

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
    async save({ commit }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const id = await apiService.addDocument("subscribers", data);
        commit("appState/setMessage", "Subscriber added successfully", {
          root: true,
        });
        console.log("Subscriber added successfully");
        return id;
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        console.log("An Error has occurred." + error);
      } finally {
        commit("appState/setLoading", false, { root: true });
      }
    },
  },
};

export default subscribers;
