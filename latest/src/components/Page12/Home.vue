<template>
  <div id="page-12">
  
    <div class="copy-col-left">
      <div class="title">
        <h1>{{ header }}</h1>
        <h2>{{ subheader }}</h2>
      </div>

      <div class="projects"></div>

      <div class="contact"></div>
    </div>

    <div class="copy-col-right">
      <div class="featured"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page12',
  data () {
    return {
      header: 'Portfolio Designs Inspired by New Typo Graphics',
      subheader: 'Page Twelve'
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common.scss';
@import '../../assets/styles/vars_page12.scss';

#page-12 {
  display: flex;
  background-color: $paper;
  color: $charcoal;
  border-bottom: 2.5vw solid $gold;
  font-family: $josefin;
  min-height: 100vh;
  padding-top: 10vw;

  .copy-col-left {
    width: 65vw;

    .title {
      max-width: 45vw;
      text-align: right;
      margin: 0 0 0 auto;

      h1, h2 {
        display: inline-block;
        font-size: 3vw;
        font-weight: $bold;
        text-transform: uppercase;
        margin: 0;
      }

      h2 {
        color: $gold;

        @include transform(translate(9.25vw, 9.25vw) rotate(90deg));
      }
    }
  }
}
</style>
