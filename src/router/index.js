import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WhoIsILYTAT from "../views/WhoIsILYTAT.vue";
import BlogView from "../views/BlogView.vue";
import ServicesView from "../views/ServicesView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import VueError from "../views/VueError.vue";

const routeColor = "#333333";
const appName = "ILYTAT";

const routes = [
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
    path: "/Who-Is-ILYTAT",
    name: "WhoIsILYTAT",
    component: WhoIsILYTAT,
    meta: {
      title: `${appName} -- About`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/ILYTAT-Blog",
    name: "ILYTATBlog",
    component: BlogView,
    meta: {
      title: `${appName} -- Thoughts`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/ILYTAT-Services",
    name: "ILYTATServices",
    component: ServicesView,
    meta: {
      title: `${appName} -- Services`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/ILYTAT-Projects",
    name: "ILYTATProjects",
    component: ProjectsView,
    meta: {
      title: `${appName} -- Projects`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/ILYTAT-Resume",
    name: "ILYTATResume",
    component: ResumeView,
    meta: {
      title: `${appName} -- Resume`,
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
