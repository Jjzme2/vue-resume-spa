import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import utilPlugin from "@/assets/util/utilPlugin.js";

const appName = "ILYTAT Blog";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || appName; // Set the title from the route meta or use a default title
  next();
});

createApp(App).use(store).use(router).use(utilPlugin).mount("#app");
