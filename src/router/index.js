import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
// import SelectCity from 'base/select-city/select-city'
import City from 'pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/city',
          component: City
        }
      ]
    }
  ]
})
