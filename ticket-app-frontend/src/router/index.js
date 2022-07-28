import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/login/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/usuario/:id',
      name: 'user',
      props: true,
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/administrador/:id',
      name: 'admin',
      props: true,
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
