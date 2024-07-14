import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import VueError from "../views/VueError.vue";

// import LoginView from "../views/LoginView.vue";

const routeColor = "#333333";
const appName = "ILYTAT";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: VueError,
    meta: {
      title: `${appName} 🔥`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  //   {
  //     path: "/",
  //     name: "login",
  //     component: LoginView,
  //     meta: {
  //       title: `${appName} 🔐`,
  //       style: { color: routeColor },
  //       hideInNav: false,
  //     },
  //   },

  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${appName} 🏠`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
