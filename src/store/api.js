const baseURL = 'https://www.easy-mock.com/mock/5ad58d46beecc618795e58ff/weexDemo'

const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
// eslint-disable-next-line
const stream = weex.requireModule('stream')

export default {
  get (URL, callback) {
    return stream.fetch(
      {
        method: 'GET',
        url: baseURL + URL,
        type: 'json',
        timeout: 5000,
        headers
      },
      callback
    )
  },
  post (URL, data, callback) {
    return stream.fetch(
      {
        method: 'POST',
        url: baseURL + URL,
        data,
        type: 'json',
        timeout: 5000,
        headers,
        transformRequest: [
          function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret.slice(0, -1)
          }
        ]
      },
      callback
    )
  }
}
