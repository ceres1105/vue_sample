import Vue from "vue";
import Router from "vue-router";
//import Home from "";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/view/Home"),
    },
    {
      path: "/login",
      component: () => import("../view/Login"),
    },
    {
      path: "/register",
      component: () => import("@/view/Register"),
    },
    {
      path: "/articles/:slug",
      //slug??
      component: () => import("@/view/Article"),
      props: true,
    },
    {
      path: "/editor/:slug?",
      component: () => import("@/view/ArticleEdit"),
      props: true,
    },
    {
      path: "/@:username",
      component: () => import("@/view/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("@/view/ProfileArticles"),
        },
      ],
    },
  ],
});
