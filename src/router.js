/* global Vue */
import Router from 'vue-router'

import home from 'views/home'
import page1 from 'components/pages/page1'
import page2 from 'components/pages/page2'
import page3 from 'components/pages/page3'
import page4 from 'components/pages/page4'
import page5 from 'components/pages/page5'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/page1'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/page1',
          name: 'page1',
          component: page1
        },
        {
          path: '/home/page2',
          name: 'page2',
          component: page2
        },
        {
          path: '/home/page3',
          name: 'page3',
          component: page3
        },
        {
          path: '/home/page4',
          name: 'page4',
          component: page4
        },
        {
          path: '/home/page5',
          name: 'page5',
          component: page5
        }
      ]
    }
  ]
})
