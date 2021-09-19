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
    path: "/task",
    name: "Task",
    meta: { needsAuth: true },
    component: () => import("../views/Task"),
  },
  {
    path: "/profiles",
    name: "Profiles",
    meta: { needsAuth: true },
    component: () => import("../views/Profiles"),
    children: [
      {
        path: ":profileId",
        name: "Profile",
        component: () => import("../views/ProfileDetail"),
        props: true,
      },
    ],
    beforeEnter: (to, from, next) => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo.role === "admin") {
        return next();
      }
      next(false);
    },
  },
  {
    path: "/my-profile",
    name: "My profile",
    meta: { needsAuth: true },
    component: () => import("../views/MyProfile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(function(to, from, next) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (to.meta.needsAuth) {
    if (!userInfo?.username) {
      next({ name: "Auth" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
