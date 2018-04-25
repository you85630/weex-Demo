/* global Vue */
import Vuex from 'vuex'
import api from '@/assets/js/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    user: {},
    list: [],
    tips: ''
  },
  getters: {
    navList: (state) => state.navList,
    user: (state) => state.user,
    list: (state) => state.list,
    tips: (state) => state.tips
  },
  actions: {
    // 获取数据
    getData: ({ commit }, state) => commit('getData', state)
  },
  mutations: {
    getData: (state) => {
      // 用户信息
      api.get('/userInfo', (res) => {
        if (res.ok) {
          state.navList = res.data.navList
          state.user = res.data.user
          state.list = res.data.list
          state.tips = res.data.tips
        }
      })
    }
  }
})
