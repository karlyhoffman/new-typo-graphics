<template>
  <div id="page-12">
    <!-- <router-link :to="{ name: 'Gallery' }">Take me home tonight</router-link> -->

    <div class="copy-container">
      <span v-for="section in sections" :key="section.id">{{ section.copy }} </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page12',
  data () {
    return {
      sections: [
        {
          copy: 'hi my name is karly hoffman'
        },
        {
          copy: "i'm a web developer based in chicago"
        },
        {
          copy: 'i started working in the web industry in 2012'
        },
        {
          copy: 'as a web editor writing and organizing content for an online retail store'
        },
        {
          copy: 'there i learned html and css and became passionate about programming'
        },
        {
          copy: 'in 2016 i decided to purse a career in web development and enroll in an intensive tech bootcamp'
        },
        {
          copy: 'which provided a solid foundation for me to become the web developer i am today.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common.scss';
@import '../../assets/styles/vars_page12.scss';

#page-12 {
  font-family: $georgia;
  font-size: 2.2vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .copy-container {
    text-align: justify;
    max-width: 35vw;

    span {
      @include transition(all 0.2s ease-out);

      &:nth-child(5n+0):hover {
        color: $steel-blue;
      }
      &:nth-child(5n+1):hover {
        color: $shakespeare;
      }
      &:nth-child(5n+2):hover {
        color: $tradewind;
      }
      &:nth-child(5n+3):hover {
        color: $puerto-rico;
      }
      &:nth-child(5n+4):hover {
        color: $emerald;
      }
    }
  }
}
</style>
