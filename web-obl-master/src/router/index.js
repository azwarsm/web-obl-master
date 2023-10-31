import { createRouter, createWebHashHistory } from "vue-router";

import dashboard from "../pages/master/dashboard-page.vue";
import home from "../pages/master/home-page.vue";
import profile from "../pages/master/profile-page.vue";
import Popup from "../components/DocumentList.vue";
import login from "../pages/master/login-page.vue";
import folder from "../pages/master/folder-page.vue";
import input from "../pages/master/input-page.vue";
import dashview from "../pages/master/dashview-page.vue";
import foldview from "../pages/master/foldview-page.vue";
import logview from "../pages/master/logview-page.vue";


const routes = [
  {
    name: "Home-Page",
    path: "/",
    component: home,
  },
  {
    name: "login",
    path: "/login",
    component: login,
  },
  {
    name: "logview-page",
    path: "/logview",
    component: logview,
  },
  {
    name: "Dashboard-Page",
    path: "/dashboard",
    component: dashboard,
  },
  {
    name: "Dashview-page",
    path: "/dashview",
    component: dashview,
  },

  {
    name: "Profile-Page",
    path: "/profile",
    component: profile,
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup,
  },
  {
    name: "Folder-page",
    path: "/folder",
    component: folder,
  },
  {
    name: "Foldview-page",
    path: "/foldview",
    component: foldview,
  },
  {
    name: "Input-page",
    path: "/input",
    component: input,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
