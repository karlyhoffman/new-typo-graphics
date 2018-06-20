<template>
  <div id="top-banner" :class="{ hide: !isActive }">
    <router-link :to="{ name: 'Gallery' }">Back to Projects</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data () {
    return {
      idleTimer: null,
      isActive: true
    }
  },
  mounted: function() {
    this.showBanner();
    window.addEventListener('mousemove', this.showBanner);
  },
  methods:{
    showBanner:function(){
      clearTimeout(this.idleTimer);
      this.isActive = true;
      console.log(this.isActive);
      
      this.idleTimer = setTimeout(function() {
        this.isActive = false;
        console.log(this.isActive);
      }, 2000);
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
