import Vue from "vue";
import Router from "vue-router";
import Auth from "@/views/Auth.vue";
import Main from "@/views/Main.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import NotFound from "@/views/NotFound.vue";
import Dashboard from "@/views/main/Dashboard.vue";
import Stub from "@/views/Stub.vue";
import store from "@/store/store";

Vue.use(Router);

const router = new Router({
  // TODO History mode is disabled for debug as it is incompatible with baseUrl
  // config setting
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "main",
      path: "/",
      redirect: { name: "dashboard" },
      component: Main,
      children: [
        {
          name: "dashboard",
          path: "dashboard",
          component: Dashboard
        },
        {
          name: "well",
          path: "/well",
          component: Stub
        },
        {
          name: "add_user",
          path: "/add_user",
          component: Stub
        },
        {
          name: "create_group",
          path: "/create_group",
          component: Stub
        },
        {
          name: "complaints",
          path: "/complaints",
          component: Stub
        },
        {
          name: "my_zone",
          path: "/my_zone",
          component: Stub
        }
      ]
    },
    {
      name: "auth",
      path: "/auth",
      redirect: { name: "login" },
      component: Auth,
      children: [
        {
          name: "login",
          path: "login",
          component: Login
        },
        {
          name: "register",
          path: "register",
          component: Register
        }
      ]
    },
    { path: "/login", redirect: { name: "login" } },
    { path: "/register", redirect: { name: "register" } },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  // TODO do not constantly check this?
  if (store.getters["user/authorized"]) {
    next();
  } else {
    if (to.name !== "login" && to.name !== "register") {
      next({ name: "login" });
    } else {
      next();
    }
  }
});

export default router;
