import api from '@/store/api'

export default {
  getData: (state) => {
    // 用户信息
    api.get('/userInfo', (res) => {
      state.user = res.data.user
    })
  }
}
