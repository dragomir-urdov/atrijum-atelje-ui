import { createRouter, createWebHistory } from "vue-router";

// Components
import Home from "@/views/Home.vue";

import * as globals from "@/globals";

const routes = [
  {
    path: "/",
    name: globals.ROUTES.HOME,
    component: Home,
  },
  {
    path: "/about",
    name: globals.ROUTES.ABOUT,
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/collections",
    name: globals.ROUTES.COLLECTIONS,
    component: () => import("@/views/Collections.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
