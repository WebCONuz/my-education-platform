export const adminRoutes = {
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "/admin",
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
        name: 'admin-task',
        component: () => import("../views/adminViews/TasksView.vue"),
      },
      {
        path: "users",
        name: 'users-table',
        component: () => import("../views/adminViews/AllUsersView.vue"),
      },
      {
        path: "settings",
        name: 'settings',
        component: () => import("../views/adminViews/SettingsView.vue"),
      },
      {
        path: "register",
        name: 'admin-register',
        component: () => import("../views/adminViews/RegisterView.vue"),
      },
    ],
};