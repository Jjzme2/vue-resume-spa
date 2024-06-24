// Vue stuff
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Highlight.js stuff
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

// Auth0
import { createAuth0 } from "@auth0/auth0-vue";

// Other
import { UtilPlugin, StringPlugin } from "./utils/utilPlugin.js";

const appName = process.env.VUE_APP_APP_NAME || "ILYTAT";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || appName; // Set the title from the route meta or use a default title
  next();
});

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(hljs.vuePlugin)
  .use(StringPlugin)
  .use(UtilPlugin)
  .use(
    createAuth0({
      domain: process.env.VUE_APP_AUTH0_DOMAIN,
      clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
      authorizationParams: {
        // redirect_uri: process.env.VUE_APP_AUTH0_CALLBACK_URL,
        redirect_uri: window.location.origin,
      },
    })
  )
  .mount("#app");
