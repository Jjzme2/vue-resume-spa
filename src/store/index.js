import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
import games from "./modules/games";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    games,
  },
});

export default store;
