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
      name: 'Snap Design',
      page: 10,
      component: Page10
    },
    {
      path: '/jen-simmons',
      name: 'Jen Simmons',
      page: 12,
      component: Page12
    }
  ]
})
