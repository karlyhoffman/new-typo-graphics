<template>
  <div id="top-banner" :class="{ hide: !isActive }">
    <router-link :to="{ name: 'Gallery' }">Back to Projects</router-link>
    <span class="ntg">New Typo Graphics</span>
    <span>Next Project</span>
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
        }, 1500);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

#top-banner {
  background-color: $medium-grey;
  color: $white;  
  font-family: $montserrat;
  font-weight: 300;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 5vw;
  text-align: center;
  text-transform: uppercase;
  line-height: 4.75vw;
  padding: 0 2vw;
  z-index: 100;

  @include css3-prefix(box-shadow, 0px -5px 40px 0px rgba(0,0,0,0.75));
  @include transition(all .25s ease-out);

  &.hide {
    @include transform(translateY(-5vw));
    @include css3-prefix(box-shadow, 0px -5px 40px 0px rgba(0,0,0,0));
  }

  &:not(.ntg) {
    font-size: 0.9rem;
  }

  .ntg {
    font-size: 1.5rem;
    letter-spacing: -0.025rem;
  }

  a {
    position: relative;
    color: $white;
    @include transition(all .25s ease-out);

    &::after {
      content: "";
      background-color: $white;
      position: absolute;
      display: block;
      height: 1px;
      bottom: 1.25vw;
      transform-origin: center;
      left: 50%;
      right: 50%;
  
      @include transition(all .15s ease-out);
    }

    &:hover {
      color: $light-grey;

      &::after {
        background-color: #777;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
