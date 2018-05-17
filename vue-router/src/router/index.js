import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import Page10 from '@/components/Page10/Page10.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/snap-design',
      name: 'Page10',
      component: Page10
    }
  ]
})
