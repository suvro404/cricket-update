import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/cricket-update-app/' : '/',
  routes
})

export default router
