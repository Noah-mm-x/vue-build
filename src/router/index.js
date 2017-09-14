import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Rank from '@/components/Rank'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/app/rank/appid/:appid/country/:country',
      name: 'rank',
      component: Rank
    }
  ]
})
