import Vue from 'vue'
import Router from 'vue-router'
import infoAcquisitionPage from '../components/infoAcquisitionPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'infoAcquisitionPage',
      component: infoAcquisitionPage
    }
  ]
})
