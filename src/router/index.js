import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/login-registration' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../containers/TheNavBar'),
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('../views/TheDashboard') },
      { path: 'users', name: 'Users', component: () => import('../views/Users.vue') },
      { path: 'edit-user', name: 'Edit User', component: () => import('../views/UserEdit.vue') },
    ]
  },
  
  { path: '**', redirect: '/home' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
