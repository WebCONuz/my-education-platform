import { createRouter, createWebHistory } from "vue-router";
import {userRoutes} from "./user";
import {adminRoutes} from "./admin";
import {notFound} from './notFound';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    userRoutes,
    adminRoutes,
    notFound
  ],
});

export default router;
