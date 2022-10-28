import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/PlayerView.vue'
import NewPlayerView from '../views/NewPlayerView.vue'
import NewSphereView from '../views/NewSphereView.vue'
import NewClassView from '../views/NewClassView.vue'
import NewTraditionView from '../views/NewTraditionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/player/:id',
      name: 'player',
      props: true,
      component: PlayerView
    },
    {
      path: '/new-player',
      name: 'new-player',
      component: NewPlayerView
    },
    {
      path: '/new-class',
      name: 'new-class',
      component: NewClassView
    },
    {
      path: '/new-sphere',
      name: 'new-sphere',
      component: NewSphereView
    },
    {
      path: '/new-tradition',
      name: 'new-tradition',
      component: NewTraditionView
    },
  ]
})

export default router
