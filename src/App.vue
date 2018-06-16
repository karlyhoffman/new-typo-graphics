<template>
  <div>
    <top-banner v-if="$router.currentRoute.name !=='Gallery'"></top-banner>
    <router-view/>
  </div>
</template>

<script>
import TopBanner from './components/TopBanner'

export default {
  name: 'App',
  components: {
    TopBanner
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #282828;
}
</style>
