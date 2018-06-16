<template>
  <div id="top-banner">
    <router-link :to="{ name: 'Gallery' }">Take me home tonight</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  data () {
    return {
    }
  },
  methods:{
    hideBanner:function(){

    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../../assets/styles/common.scss';

#top-banner {
  
}
</style>
