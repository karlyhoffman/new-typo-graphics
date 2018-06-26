<template>
  <div id="app">
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