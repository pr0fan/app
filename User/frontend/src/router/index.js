import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "user" */ '../views/Home.vue'),
  },
  {
    path: '/users/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue')
  },
  { 
    path: '/users/edit/:id', 
    name: 'Edit',  
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
  { 
    path: '*', 
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
