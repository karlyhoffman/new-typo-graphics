<template>
  <div class="gallery">
    <h1>{{ title }}</h1>
    <div class="project-cont" v-for="route in routes" :key="route.id">
      <router-link :to="route.path">
        <div class="img" :style="getBgImg(route.page)"></div>
        <span>{{route.name}}, Page {{route.page}}</span>
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
    getBgImg (pageNum) {
      return 'background-image: url(' + require('../assets/img/gallery/page' + pageNum + '.png') + ');'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/styles/common.scss';

  .gallery {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    a {
      position: relative;
      display: block;
      width: 350px;
      height: 200px;

      span {
        position: absolute;
        left: 50%;
        bottom: 2px;
        @include transform(translateX(-50%));
        @include transition(all 0.2s ease-out);
      }

      .img {
        display: block;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
      }

      &:nth-child(1) > .img {
        background-position: 50% 42%;
      }

      &:hover {
        span {
          bottom: -20px;
        }
      }
    }
  }
</style>
