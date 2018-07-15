<template>
  <div id="page-12">
    
    <div class="copy-container">
      <a 
        v-for="section in sections" 
        @mouseover="enterDetail(section)" 
        @mouseleave="leaveDetail(section)"
        :class="{ hidden: section.hide }"
        :key="section.id">{{ section.copy }} 
      </a>
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
          name: "about",
          copy: "hi my name is karly hoffman",
          hide: false
        },
        {
          name: "location",
          copy: "i'm a web developer based in chicago",
          hide: false
        },
        {
          name: "resume",
          copy: "i started working in the web industry in 2012",
          hide: false
        },
        {
          name: "tennis-warehouse",
          copy: "as a web editor writing and organizing content for an online retail store",
          hide: false
        },
        {
          name: "programming",
          copy: "there i learned html and css and became passionate about programming",
          hide: false
        },
        {
          name: "general-assembly",
          copy: "in 2016 i decided to purse a career in web development and enroll in an intensive tech bootcamp",
          hide: false
        },
        {
          name: "projects",
          copy: "which provided a solid foundation for me to become the web developer i am today.",
          hide: false
        }
      ]
    }
  },
  methods:{
    enterDetail:function(hoverSection) {
      this.sections.forEach(section => {
        if (section !== hoverSection) section.hide = true; 
      });
    },
    leaveDetail:function(hoverSection) {
      this.sections.forEach(section => {
        section.hide = false; 
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/common.scss';
@import '../../assets/styles/vars_page12.scss';

#page-12 {
  font-family: $slabo;
  font-size: 4vw;
  line-height: 6vw;
  letter-spacing: 0.1vw;
  min-height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5vh;

  @include breakpoint(tablet) {
    font-size: 2vw;
    line-height: 2.5vw;
  }

  .copy-container {
    position: relative;
    text-align: justify;
    max-width: 75vw;

    @include breakpoint(tablet) {
      max-width: 34vw;
    }

    a {
      cursor: pointer;
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

      &.hidden {
        opacity: 0.2;
      }
    }
  }
}
</style>
