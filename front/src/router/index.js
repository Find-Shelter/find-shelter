import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legal',
    name: 'Legal',
    component: () => import('../views/Legal.vue'),
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
