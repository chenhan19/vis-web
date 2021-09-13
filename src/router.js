import { createRouter, createWebHashHistory } from 'vue-router' // 路由规则
const routes = [
    {
        path: '/',
        name: 'helloword',
        component: () => import('@/components/HelloWorld.vue')
      },
    
] // 路由模式：这里使用的是 hash 模式
const routerOptions = { history: createWebHashHistory(), routes } // Vue Router 实例
const router = createRouter(routerOptions) // 导出
export default router
