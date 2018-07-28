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
          detail: "interests: eating, records + concerts, road trips, puns",
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
          detail: "github.com/karlyhoffman",
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
  font-size: 4.5vw;
  line-height: 6vw;
  letter-spacing: 0.1vw;
  min-height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;

  @include breakpoint(phablet) {
    font-size: 3vw;
    line-height: 3.75vw;
  }

  @include breakpoint(laptop) {
    font-size: 2vw;
    line-height: 2.5vw;
  }

  .copy-container {
    position: relative;
    text-align: justify;
    max-width: 75vw;

    @include breakpoint(phablet) {
      max-width: 55vw;
    }

    @include breakpoint(laptop) {
      max-width: 35vw;
    }

    a {
      position: relative;
      cursor: pointer;

      @include transition(all 0.2s ease-out);

      &::after {
        content: attr(data-detail);
        pointer-events: none;
        position: absolute;
        color: $black;
        font-size: 4.15vw;
        text-align: center;
        line-height: 1;
        opacity: 0;

        @include breakpoint(phablet) {
          font-size: 2vw;
          max-width: none;
          white-space: nowrap;
        }

        @include breakpoint(laptop) {
          font-size: 1.25vw;
        }

        @include transform(translateY(5px));
      }

      &.active::after {
        opacity: 1;

        @include transform(translateY(0));
        @include transition(opacity 1s ease-out, transform 0.6s ease-out);
      }

      &:nth-child(1) {
        &:hover {
          color: $steel-blue;
        }

        &::after {
          top: -25vw;
          left: 22vw;
        }
      }

      &:nth-child(2) {
        &:hover {
          color: $shakespeare;
        }

        &::after {
          top: -20vw;
          left: -25vw;
        }
      }

      &:nth-child(3) {
        &:hover {
          color: $tradewind;
        }

        &::after {
          top: -30vw;
          left: -37vw;
        }
      }

      &:nth-child(4) {
        &:hover {
          color: $puerto-rico;
        }

        &::after {
          top: -40vw;
          left: -55vw;
        }
      }

      &:nth-child(5) {
        &:hover {
          color: $emerald;
        }

        &::after {
          top: 60vw;
          left: -55vw;
        }
      }

      &:nth-child(6) {
        &:hover {
          color: $puerto-rico;
        }

        &::after {
          top: 55vw;
          left: -42vw;
        }
      }

      &:nth-child(7) {
        &:hover {
          color: $tradewind;
        }

        &::after {
          top: 50vw;
          left: -15vw;
        }
      }

      @include breakpoint(phablet) {
        &:nth-child(1) {
          &::after {
            top: -10vw;
            left: 4vw;
          }
        }

        &:nth-child(2) {
          &::after {
            top: -10vw;
            left: -18vw;
          }
        }

        &:nth-child(3) {
          &::after {
            top: -14vw;
            left: -22.5vw;
          }
        }

        &:nth-child(4) {
          &::after {
            top: -18vw;
            left: -50vw;
          }
        }

        &:nth-child(5) {
          &::after {
            top: 34vw;
            left: -45vw;
          }
        }

        &:nth-child(6) {
          &::after {
            top: 27vw;
            left: -20vw;
          }
        }

        &:nth-child(7) {
          &::after {
            top: 20vw;
            left: -30vw;
          }
        }
      }

      @include breakpoint(laptop) {
        &:nth-child(1) {
          &::after {
            top: 15vw;
            left: -23vw;
            max-width: none;

            @include transform(rotate(-0.25turn));
          }
        }

        &:nth-child(2) {
          &::after {
            top: 2.75vw;
            left: 12vw;
          }
        }

        &:nth-child(3) {
          &::after {
            top: 33vw;
            left: -16vw;
          }
        }

        &:nth-child(4) {
          &::after {
            top: -10vw;
            left: -55vw;
          }
        }

        &:nth-child(5) {
          &::after {
            top: 20vw;
            left: 10vw;
          }
        }

        &:nth-child(6) {
          &::after {
            top: -21vw;
            left: -17vw;
            white-space: normal;
            max-width: 25vw;

            @include transform(rotate(-0.12turn));
          }
        }

        &:nth-child(7) {
          &::after {
            top: -10vw;
            left: 16vw;
          }
        }
      }

      &.hidden {
        opacity: 0.2;
      }
    }
  }
}
</style>
