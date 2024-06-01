import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
import journals from "./modules/journals";
import content_style from "./modules/content_style";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    journals,
    content_style,
  },
});

export default store;
