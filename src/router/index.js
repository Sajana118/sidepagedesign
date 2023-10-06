import { createRouter, createWebHistory } from 'vue-router'
import pageList from "@/components/page-List.vue"

const routes = [
  {
    path: '/',
    name: 'page',
    component: pageList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
