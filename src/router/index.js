import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Credentials = () => import(/* webpackChunkName: "credentials" */ '../views/Credentials.vue')
const Feedbacks = () => import(/* webpackChunkName: "credentials" */ '../views/Feedbacks.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && to.meta.requiresAuth) next({ name: 'Home' })
  else next()
})

export default router
