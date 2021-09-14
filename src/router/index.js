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
    meta: { needsAuth: true },
    component: () => import("../views/Profile"),
  },
  {
    path: "/task",
    name: "Task",
    meta: { needsAuth: true },
    component: () => import("../views/Task"),
  },
  {
    path: "/user",
    name: "User",
    meta: { needsAuth: true },
    component: () => import("../views/User"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(function(to, from, next) {
  const userId = localStorage.getItem("userId");
  if (to.meta.needsAuth) {
    if (userId === "") {
      next({ name: "Auth" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
