import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import CategoryAndOrganizer from '../views/CategoryAndOrganizerList.vue'
import Students from '../views/StudentList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/CategoryOrganizerList',
    name: 'CategoryAndOrganizerList',
    component: CategoryAndOrganizer
  },
  {
    path: '/StudentsList',
    name: 'StudentsList',
    component: Students
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
