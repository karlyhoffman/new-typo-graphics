<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="project-cont" v-for="route in routes" :key="route.id">
      <router-link :to="route.path">
        <span>{{route.name}}, Page {{route.page}}</span>
        <img :src="getImgUrl(route.page)" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      title: 'New Typo Graphics',
      routes: [
        {
          page: 10,
          name: 'Snap Design',
          path: '/snap-design'
        }
      ]
    }
  },
  methods: {
    getImgUrl (pageNum) {
      return require('../assets/img/gallery/page' + pageNum + '.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .project-cont {
    width: 350px;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
</style>
