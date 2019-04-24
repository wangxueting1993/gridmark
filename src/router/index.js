import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
Vue.use(Router)
export const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home')
      }
    ]
  }
]
export default new Router({ routes })
