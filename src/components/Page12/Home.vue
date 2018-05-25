<template>
  <div id="page-12">
    <router-link :to="{ name: 'Gallery' }">Take me home tonight</router-link>

    <!-- <nav-bar/>-->
    <h1>{{ firstName }} <strong>{{ lastName }}</strong></h1>
    <!-- <img class="bg-img" src="../../assets/img/page-10/hero_bg.jpg">
    <about/>
    <work-history/>
    <projects/>
    <contact/> -->
  </div>
</template>

<script>

// import NavBar from './NavBar'
// import About from './About'
// import WorkHistory from './WorkHistory'
// import Projects from './Projects'
// import Contact from './Contact'

export default {
  name: 'Page12',
  components: {
    // NavBar,
    // About,
    // WorkHistory,
    // Projects,
    // Contact
  },
  data () {
    return {
      firstName: 'This is',
      lastName: 'Page 12!'
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common.scss';
@import '../../assets/styles/vars_page12.scss';

#page-12 {}
</style>
