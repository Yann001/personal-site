import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import RecordYou from '@/pages/design/RecordYou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/design/recordYou/',
      component: RecordYou
    }
  ]
})
