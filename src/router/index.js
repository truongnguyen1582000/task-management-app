import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile"),
  },
  {
    path: "/task",
    name: "Task",
    component: () => import("../views/Task"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
