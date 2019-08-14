import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/my-feed",
      name: "my-feed",
      component: Home
    },
    {
      path: "/tags/:tag",
      name: "home-tags",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import(/* webpackChunkName: "settings" */ "./views/Settings.vue")
    },
    {
      path: "/editor",
      name: "editror",
      component: () => import("./views/Editor.vue")
    },
    {
      path: "/articles/:slug",
      name: "articles-page",
      component: () => import(/** webpackChunkName: "articles" */ "./views/Article.vue")
    }
  ]
});
