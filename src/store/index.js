import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
import markdowns from "./modules/markdowns";
import interests from "./modules/interests";
import subscribers from "./modules/subscribers";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    markdowns,
    interests,
    subscribers,
  },
});

export default store;
