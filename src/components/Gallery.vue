<template>
  <div class="gallery">
    <h1>{{ title }}</h1>
    <div class="project" v-for="route in routes" :key="route.id">
      <router-link :to="route.path">
        <div v-if="route.page" class="img" :style="getBgImg(route.page)"></div>
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
        },
        {
          page: 12,
          name: 'Cranbrook Design',
          path: '/cranbrook-design'
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2vw;

    @include breakpoint(laptop) { 
      padding: 2vw 10vw;
    }

    h1 {
      width: 100%;
      text-align: center;
      padding-bottom: 2.5vw;
    }

    .project {
      position: relative;
      display: block;
      width: 100vw;
      height: 60vw;
      text-align: center;
      margin: 8vw 0;

      @include css3-prefix(box-shadow, 0px 1px 5px 1px rgba(0,0,0,0.2));
      @include transition(box-shadow 0.2s ease-out);
      
      @include breakpoint(phablet) { 
        width: 40vw;
        height: 24vw;
        margin: 0 0 2vw 0;
      }

      @include breakpoint(laptop) { 
        width: 20vw;
        height: 13vw;
      }

      a {
        color: $black;

        span {
          z-index: 1;
          position: absolute;
          width: 100%;
          top: -7.5vw;

          @include transform(translateX(-50%));
          @include transition(all 0.3s ease-out);

          @include breakpoint(phablet) { 
            top: auto;
            bottom: 1vw;
          }
        }

        .img {
          z-index: 2;
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
      }

      &:hover {
        @include css3-prefix(box-shadow, 0px 1px 5px 1px rgba(0,0,0,0.25));

        span {
          bottom: -2vw;
        }
      }
    }
  }
</style>
