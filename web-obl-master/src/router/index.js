import { createRouter, createWebHashHistory } from "vue-router";

import dashboard from "../pages/master/dashboard-page.vue";
import home from "../pages/master/home-page.vue";
import profile from "../pages/master/profile-page.vue";
import Popup from "../components/DocumentList.vue";
import login from "../pages/master/login-page.vue";



const routes = [
  {
    name: "login",
    path: "/",
    component: login,
  },
  {
    name: "Dashboard-Page",
    path: "/dashboard",
    component: dashboard,
  },
  {
    name: "Home-Page",
    path: "/home",
    component: home,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
