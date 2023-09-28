export const notFound = {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../layouts/NotFoundLayout.vue"),
}