import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import Page10 from '@/components/Page10/Home.vue'
import Page12 from '@/components/Page12/Home.vue'

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
    },
    {
      path: '/cranbrook-design',
      name: 'Page12',
      component: Page12
    }
  ]
})
