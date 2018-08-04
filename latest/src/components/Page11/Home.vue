<template>
  <div id="page-11">
  
    <div class="copy-container">
      <div class="title">
        <h1>{{ header }}</h1>
        <h2>{{ subheader }}</h2>
      </div>

      <div class="featured"></div>

      <div class="projects"></div>

      <div class="contact"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page11',
  data () {
    return {
      header: 'New Typo Graphics Page Eleven',
      subheader: 'Karly Hoffman'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common.scss';
@import '../../assets/styles/vars_page11.scss';

#page-11 {
  background-color: $ecru;
  min-height: 100vh;

  .title {
    display: inline-block;

    h1 {
      display: inline-block;
      text-align: right;
      margin: 0;
    }

    h2 {
      display: inline-block;
      transform-origin: bottom left;
      margin-right: 25px;

      @include transform(rotate(90deg));
    }
  }
}
</style>
