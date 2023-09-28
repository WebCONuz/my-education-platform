export const userRoutes = {
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
};