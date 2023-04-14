import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { UseCommonStore } from "../store/common.store";
import { PageI } from "../types/pages.types";

const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: () => import("../pages/Auth.vue"),
  },
  {
    name: "Home",
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    name: "Test",
    path: "/test",
    component: () => import("../pages/Test.vue"),
  },
  {
    name: "Only",
    path: "/only",
    component: () => import("../pages/SiNoTienePermiso.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, _, next) => {
//   const saved_routes: PageI[] = JSON.parse(
//     localStorage.getItem("pages") || "[]"
//   );
//   const names = saved_routes.map((sv) => sv.pagePath);
//   const havePermission = names.includes(to.path);
//   if (!havePermission) {
//     return next("/");
//   }
//   next();
// });

// console.log(UseCommonStore().pages)

export default router;
