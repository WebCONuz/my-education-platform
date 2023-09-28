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
      path: "/admin",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [
        {
          path: "main",
          name: 'admin-main',
          component: () => import("../views/adminViews/DashboardView.vue"),
        },
        {
          path: "blog",
          name: 'admin-blog',
          component: () => import("../views/adminViews/BlogView.vue"),
        },
        {
          path: "task",
          component: () => import("../views/adminViews/TasksView.vue"),
        },
        {
          path: "users",
          component: () => import("../views/adminViews/AllUsersView.vue"),
        },
        {
          path: "settings",
          component: () => import("../views/adminViews/SettingsView.vue"),
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
