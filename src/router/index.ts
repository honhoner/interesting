import { createRouter,createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory('/'), // 这里指定基本URL
    routes: [
        {
          path: '/home',
          name: '/home',
          component: () => import('@/views/home.vue')
        }
    ]
})
export default router