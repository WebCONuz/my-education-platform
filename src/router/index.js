import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/UserLayout.vue"),
      children: [
        {
          path: "/",
          component: () => import("../views/userViews/HomeView.vue"),
        },
        {
          path: "about",
          component: () => import("../views/userViews/AboutView.vue"),
        },
      ],
    },
    {
      path: "/admin/",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [
        {
          path: "main",
          component: () => import("../views/adminViews/MainView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../layouts/NotFoundLayout.vue"),
    },
  ],
});

export default router;
