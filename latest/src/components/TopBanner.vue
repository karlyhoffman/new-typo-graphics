<template>
  <div id="top-banner" :class="{ hide: !isActive }">
    <router-link :to="{ name: 'Gallery' }">Back<span> to Projects</span></router-link>
    <span class="ntg">New Typo Graphics</span>
    <span>
      <router-link :to="nextProject" v-if="nextProject.length > 0" :key="nextProject.id">Next<span> Project</span></router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data () {
    return {
      idleTimer: null,
      isActive: true,
      nextProject: ''
    }
  },
  watch:{
    $route (to, from){
        this.nextProject = '';
    }
  }, 
  created: function() {    
    this.$router.options.routes.forEach((route, index) => {
      const lastProject = this.$router.options.routes[this.$router.options.routes.length - 1].path;

      if (this.$router.currentRoute.path === lastProject) {
        this.nextProject = '';
      } else if (this.$router.currentRoute.path === route.path) {
        this.nextProject = this.$router.options.routes[index + 1].path;
      }
    });
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
  height: 15vw;
  font-size: 3.5vw;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  padding: 0 2vw;
  z-index: 100;

  @include css3-prefix(box-shadow, 0px -5px 40px 0px rgba(0,0,0,0.75));
  @include transition(all .25s ease-out);

  &.hide {
    @include transform(translateY(-15vw));
    @include css3-prefix(box-shadow, 0px -5px 40px 0px rgba(0,0,0,0));
  }

  .ntg {
    font-size: 5vw;
  }

  a {
    position: relative;
    color: $white;
    padding: 1vw 0;

    @include transition(all .25s ease-out);

    span {
      display: none;
    }

    &::after {
      content: "";
      background-color: $white;
      position: absolute;
      display: block;
      height: 1px;
      bottom: 0.5vw;
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

  @include breakpoint(phablet) {
    height: 5vw;

    &.hide {
      @include transform(translateY(-5vw));
    }

    a > span {
      display: inline;
    }

    &:not(.ntg) {
      font-size: 0.9rem;
    }

    .ntg {
      font-size: 1.5rem;
      letter-spacing: -0.025rem;
    }
  }
}
</style>
