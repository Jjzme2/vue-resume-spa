const markdowns = {
  namespaced: true,
  state: {
    defaultDirectory: "/src/assets/markdown/",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getMarkdownByName: (state) => (fileName) => {
      return state.allItems.find((markdown) => markdown.slug === fileName);
    },
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
  },
  actions: {
    fetchAll({ commit }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const requireContext = require.context(
          "@/assets/markdown",
          true,
          /\.md$/
        );
        const markdowns = requireContext.keys().map((file) => {
          const content = requireContext(file);
          const slug = file.replace(/^\.\/(.*)\.\w+$/, "$1");
          return {
            slug,
            title: slug.replace(/-/g, " "),
            content,
          };
        });

        commit("setAll", markdowns);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        commit("appState/setError", error.message, { root: true });
        commit("appState/setLoading", false, { root: true });
      }
    },
  },
};

export default markdowns;
