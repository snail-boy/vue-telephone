import Vue from 'vue'
import Router from 'vue-router'
// import uploadUse from '@/test/test-upload'
import Demo from '@/views/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
