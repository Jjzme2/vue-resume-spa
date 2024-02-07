import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const appName = "ILYTAT Blog";

const routeColor = "#333333";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${appName} -- Home`,
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
