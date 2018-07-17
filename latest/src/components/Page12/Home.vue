<template>
  <div id="page-12">
    
    <div class="copy-container">
      <a 
        v-for="section in sections" 
        @mouseover="enterDetail(section)" 
        @mouseleave="leaveDetail(section)"
        :class="{ 
          active: section.isActive,
          hidden: section.hide
        }"
        :data-detail="section.detail"
        :key="section.id">
        {{ section.copy }}
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
          detail: "interests: record collecting, road trips, puns",
          isActive: false,
          hide: false
        },
        {
          name: "location",
          copy: "i'm a web developer based in chicago",
          detail: "since 2016",
          isActive: false,
          hide: false
        },
        {
          name: "resume",
          copy: "i started working in the web industry in 2012",
          detail: "no intention of leaving",
          isActive: false,
          hide: false
        },
        {
          name: "tennis-warehouse",
          copy: "as a web editor writing and organizing content for an ecommerce website",
          detail: "Tennis Warehouse, the world's largest online retail tennis store",
          isActive: false,
          hide: false
        },
        {
          name: "programming",
          copy: "there i learned html and css and became passionate about programming",
          detail: "started taking web development courses online through UCSD and Team Treehouse",
          isActive: false,
          hide: false
        },
        {
          name: "general-assembly",
          copy: "in 2016 i decided to purse a career in web development and enroll in an intensive tech bootcamp",
          detail: "12-week course covering both front-end and back-end technologies",
          isActive: false,
          hide: false
        },
        {
          name: "projects",
          copy: "which provided a solid foundation for me to become the web developer i am today.",
          detail: "[github links here]",
          isActive: false,
          hide: false
        }
      ]
    }
  },
  methods:{
    enterDetail:function(hoverSection) {
      this.sections.forEach(section => {
        section !== hoverSection ? section.hide = true : section.isActive = true; 
      });
    },
    leaveDetail:function(hoverSection) {
      this.sections.forEach(section => {
        section.hide = false; 
        section.isActive = false; 
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
      position: relative;
      cursor: pointer;

      @include transition(all 0.2s ease-out);

      &::after {
        opacity: 0;
        position: absolute;
        content: attr(data-detail);
        color: $black;
        font-size: 18px;
        line-height: 1;
        white-space: nowrap;
      }

      &.active::after {
        opacity: 1;
      }

      &:nth-child(1) {
        &:hover {
          color: $steel-blue;
        }

        &::after {
          top: -5vh;
          left: -20vw;
        }
      }

      &:nth-child(2) {
        &:hover {
          color: $shakespeare;
        }

        &::after {
          left: 10vw;
        }
      }

      &:nth-child(3) {
        &:hover {
          color: $tradewind;
        }

        &::after {
          left: 10vw;
        }
      }

      &:nth-child(4) {
        &:hover {
          color: $puerto-rico;
        }

        &::after {
          left: 10vw;
        }
      }

      &:nth-child(5) {
        &:hover {
          color: $emerald;
        }

        &::after {
          left: 10vw;
        }
      }

      &:nth-child(6) {
        &:hover {
          color: $puerto-rico;
        }

        &::after {
          left: 10vw;
        }
      }

      &:nth-child(7) {
        &:hover {
          color: $tradewind;
        }

        &::after {
          left: 10vw;
        }
      }

      &.hidden {
        opacity: 0.2;
      }
    }
  }
}
</style>
