import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Lines",
    component: () => import("../views/BusLines.vue"),
  },
  {
    path: "/stops",
    name: "Stops",
    component: () => import("../views/BusStops.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
