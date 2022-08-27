import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdvertisingView from '../views/AdvertisingView.vue'
//import FilterPhoneView from '../views/FilterPhoneView.vue'
//import SearchPhoneView from '../views/SearchPhoneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/advertising',
      name: 'advertising',
      component: AdvertisingView
    },
    // {
    //   path: '/filterphone',
    //   name: 'filterphone',
    //   component: FilterPhoneView
    // },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: SearchPhoneView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
