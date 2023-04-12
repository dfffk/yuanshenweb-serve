import Vue from "vue";
import VueRouter from "vue-router";
import Entrance from "./pages/Entrance.vue";
import HomePage from "./pages/HomePage.vue";
import Details from "./pages/Details.vue";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "/", redirect: "/entrance" },
    { path: "/entrance", component: Entrance },
    { path: "/home", component: HomePage },
    { path: "/details", component: Details },
    { path: "*", component: () => import("./pages/NotFound.vue") },
  ],
});
