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
    window.addEventListener('scroll', this.showBanner);
  },
  methods:{
    showBanner:function(e){
      if (window.pageYOffset === 0) {
        const vm = this;
        clearTimeout(this.idleTimer);
        vm.$set(vm, 'isActive', true)

        this.idleTimer = setTimeout(function() {
          vm.$set(vm, 'isActive', false)
        }, 2000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

#top-banner {
  background-color: $white;
  font-family: $montserrat;
  font-weight: 300;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 5vw;
  text-align: center;
  text-transform: uppercase;
  line-height: 4.75vw;
  z-index: 100;

  @include transition(all .25s ease-out);

  &.hide {
    @include transform(translateY(-5vw));
  }
}
</style>
