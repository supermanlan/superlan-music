
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: {
      template: '<div>首页内容</div>'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
