import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

module.exports = function store () {
  return new Vuex.Store({
    state: {
      user: {
        name: '思来氏',
        number: '1234567890'
      }
    },
    getters: {
      user: (state) => state.user
    }
  })
}
