<template>
  <div id="page-12">
    
    <div class="copy-container">
      <a 
        v-for="section in sections" 
        @click="expandDetail(section)"
        :class="{ selected: section.isActive }"
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
          isActive: false
        },
        {
          name: "location",
          copy: "i'm a web developer based in chicago",
          isActive: false
        },
        {
          name: "resume",
          copy: "i started working in the web industry in 2012",
          isActive: false
        },
        {
          name: "tennis-warehouse",
          copy: "as a web editor writing and organizing content for an online retail store",
          isActive: false
        },
        {
          name: "programming",
          copy: "there i learned html and css and became passionate about programming",
          isActive: false
        },
        {
          name: "general-assembly",
          copy: "in 2016 i decided to purse a career in web development and enroll in an intensive tech bootcamp",
          isActive: false
        },
        {
          name: "projects",
          copy: "which provided a solid foundation for me to become the web developer i am today.",
          isActive: false
        }
      ]
    }
  },
  methods:{
    expandDetail:function(clicked){
      this.sections.forEach(function(section) {
        if (section === clicked && section.isActive) {
          section.isActive = !section.isActive;
        } else {
          section === clicked ? section.isActive = true : section.isActive = false;
        }
      });
      
      const hiddenSections = this.sections.filter(e => !e.isActive);
      hiddenSections.length === this.sections.length ? console.log('dont hide') : console.log('hide');
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
  line-height: 7vw;
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
    max-width: 90vw;

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

      &.selected {
        font-size: 7vw;

        @include breakpoint(tablet) {
          font-size: 4vw;
        }
      }

      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
