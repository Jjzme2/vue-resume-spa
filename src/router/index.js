import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import VueError from "../views/VueError.vue";

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
  {
    path: "/games",
    name: "games",
    component: GameView,
    meta: {
      title: `${appName} 🎮`,
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
