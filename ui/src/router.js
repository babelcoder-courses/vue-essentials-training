import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/foods",
  },
  {
    path: "/auth/sign-in",
    component: () => import("@/modules/auth/components/Signin.vue"),
  },
  {
    path: "/auth/sign-up",
    component: () => import("@/modules/auth/components/Signup.vue"),
  },
  {
    path: "/foods",
    component: () => import("@/modules/foods/components/FoodList.vue"),
  },
  {
    path: "/order",
    component: () => import("@/modules/orders/components/Order.vue"),
  },
  {
    path: "/:pathname(.*)",
    component: () => import("@/modules/ui/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
