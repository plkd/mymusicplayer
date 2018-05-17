import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/pages/Login/Login'
import Index from '@/pages/Index/Index'
import Playlist from '@/pages/Playlist/Playlist';
import MyInfo from '@/pages/MyInfo/MyInfo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/myInfo',
      name: MyInfo,
      component: MyInfo
    }
  ]
})
