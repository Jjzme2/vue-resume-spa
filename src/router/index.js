import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WhoIsILYTAT from "../views/WhoIsILYTAT.vue";
import NoteView from "../views/NoteView.vue";

const routeColor = "#333333";
const appName = "ILYTAT Blog";

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
  {
    path: "/Who-Is-ILYTAT",
    name: "WhoIsILYTAT",
    component: WhoIsILYTAT,
    meta: {
      title: `${appName} -- Who Is ILYTAT`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/ILYTAT-Study",
    name: "markdown-files",
    component: () => NoteView,
    meta: {
      title: `${appName} -- ILYTAT Notes`,
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
