import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/pages/Login/Login'
import Index from '@/pages/Index/Index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'LogIn',
      components: LogIn
    }
  ]
})
