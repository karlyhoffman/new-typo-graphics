<template>
  <div id="top-banner">
    <router-link :to="{ name: 'Gallery' }">Back to Projects</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data () {
    return {
    }
  },
  mounted: function() {
    // hide top banner after page load, if user scrolls to top show
  },
  methods:{
    hideBanner:function(){

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

#top-banner {
  width: 100vw;
  height: 5vw;
  text-align: center;
  text-transform: uppercase;
  line-height: 4.75vw;

  @include transition(all .25s ease-out);

  &.hide {
    @include transform(translateY(-5vw));
  }
}
</style>
