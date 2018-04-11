// import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line
Vue.use(Vuex)

module.exports = function store () {
  return new Vuex.Store({
    state: {
      user: {
        name: '思来氏',
        number: '1234567890'
      },
      list: [
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-1.png',
          name: '小思学院·阅读',
          state: true
        },
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-5.png',
          name: '小思学院·课程',
          state: true
        },
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-2.png',
          name: '小思学院·艺术',
          state: true
        },
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-3.png',
          name: '小思徽章',
          state: true
        },
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-4.png',
          name: '小思万里行',
          state: false
        },
        {
          linkto: '',
          cover: 'http://static.silaishi.com/wechat/wximgs/report-6.png',
          name: '期末学科评价',
          state: true
        }
      ],
      tips:
        '每一位使用小思一卡通的孩子都拥有一个云端的独立帐户，这个帐户是一本高科技的成长日记，忠实记录着孩子点点滴滴的成长经历数据。小思学院记录孩子在课程学习，课外阅读、艺术素养时相关的成长印记；小思徽章记录教师对孩子日常在校行为表现的评价；小思万里行记录孩子的社会实践足迹。家长通过微信绑定小思一卡通，可以即时收到孩子的精彩表现提醒，查阅孩子成长档案，了解更多针对孩子个性发展的教育资源。让您可以更加全面地了解孩子的发展，发现独一无二的他/她'
    },
    getters: {
      user: (state) => state.user,
      list: (state) => state.list,
      tips: (state) => state.tips
    }
  })
}
