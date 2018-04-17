const baseURL = 'https://www.easy-mock.com/mock/5ad58d46beecc618795e58ff/weexDemo'
// eslint-disable-next-line
const stream = weex.requireModule('stream')

export default {
  get (URL, params) {
    return new Promise((resolve, reject) => {
      stream
        .fetch({
          method: 'GET',
          url: baseURL + URL,
          params,
          type: 'json'
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  },
  post (URL, data) {
    return new Promise((resolve, reject) => {
      stream
        .fetch({
          method: 'POST',
          url: baseURL + URL,
          data,
          type: 'json',
          transformRequest: [
            function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret.slice(0, -1)
            }
          ]
        })
        .catch(function (err) {
          console.log(err)
        })
    })
  }
}
