import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WOIView from "../views/WarriorsView.vue";
import VueError from "../views/VueError.vue";

const routeColor = "#333333";
const appName = "ILYTAT";

const routes = [
  {
    path: "/vue-resume-spa/:pathMatch(.*)*",
    redirect: "/ILYTAT-Resume",
  },
  // Local routes
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
  {
    path: "/Warriors_Of_ILYTAT",
    name: "Warriors",
    component: WOIView,
    meta: {
      title: `${appName} -- Warriors_Of_ILYTAT`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  //   Catch all route
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: VueError,
    meta: {
      title: `${appName} -- 404`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
