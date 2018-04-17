import api from '@/store/api'

export default {
  getData: () => {
    // 用户信息
    api.get('/userInfo').then(function (res) {
      console.log(res)
    })
  }
}
