import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    component: () => import("@/modules/posts/components/PostList.vue"),
  },
  {
    path: "/posts/:id",
    component: () => import("@/modules/posts/components/PostDetails.vue"),
  },
  {
    path: "/users",
    component: () => import("@/modules/users/components/PostList.vue"),
  },
  {
    path: "/users/:id",
    component: () => import("@/modules/users/components/UserDetails.vue"),
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
