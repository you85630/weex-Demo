/* global Vue */

/* weex initialized here, please do not move this line */
const createStore = require('@/store')
const store = createStore()

const router = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(
  Vue.util.extend(
    {
      el: '#root',
      router,
      store
    },
    App
  )
)
