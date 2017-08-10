import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/homePage.vue'
import WaterPage from '../components/wateringCtr.vue'
import PlanPage from '../components/plan.vue'

Vue.use(Router)

export default new Router({
  base: __dirname,
  routes: [
  { path: '/', component: HomePage },
  { path: '/waterpage', component: WaterPage },
  { path: '/planpage', component: PlanPage },
  ]
})
