import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
    name: "Home",
    path: "",
    component: () => import("../pages/Home.vue")
}, {
    name: "Auth",
    path: "/auth",
    component: () => import("../pages/Auth.vue")
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;