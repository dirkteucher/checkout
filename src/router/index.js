import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import('../../node_modules/vuetify/dist/vuetify.min.css')

import Router from 'vue-router'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
