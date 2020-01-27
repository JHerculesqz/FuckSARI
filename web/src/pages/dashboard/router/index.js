import Vue from 'vue'
import Router from 'vue-router'
import dashboardPage from '../components/dashboardPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboardPage',
      component: dashboardPage
    }
  ]
})
