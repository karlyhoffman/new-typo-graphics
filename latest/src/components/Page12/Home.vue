<template>
  <div id="page-12">
  
    <div class="copy-container">
      <div class="title">
        <h1>{{ header }}</h1>
        <h2>{{ subheader }}</h2>
      </div>

      <ul class="projects">
        <li v-for="project in projects" :key="project.id">{{ project }}</li>
      </ul>

      <ul class="experience-skills">
        <!-- <li>Knowledgeable in:</li> -->
        <li v-for="skill in skills" :key="skill.id">{{ skill }}</li>
      </ul>

      <div class="contact">
        <p>Follow <a href="https://github.com/karlyhoffman" target="_blank">karlyhoffman</a> on Github to keep up with her latest projects.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Page12',
  data () {
    return {
      header: 'Portfolio Designs Inspired by New Typo Graphics',
      subheader: 'Page Twelve',
      projects: [
        'Project One',
        'Project Two',
        'Project Three'
      ],
      skills: [
        'HTML',
        'CSS/SCSS',
        'Vue',
        'Angular',
        'React',
        'GSAP'
      ]
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
  background-color: $paper;
  color: $charcoal;
  border-bottom: 2.5vw solid $gold;
  font-family: $josefin;
  line-height: 1.2;
  display: flex;
  min-height: 100vh;
  padding-top: 10vw;

  .copy-container {
    position: relative;
    height: 37.5vw;
    width: 90vw;
    margin: 0 auto;

    .title {
      position: absolute;
      top: 0;
      left: 48%;
      width: 42%;
      text-align: right;
      margin: 0 auto;

      @include transform(translateX(-50%));

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

    .projects {
      position: absolute;
      top: 25%;
      right: 7.5%;
      width: 22%;
      border-top: 6px solid $charcoal; 
      border-bottom: 6px solid $charcoal;
      line-height: 1.5; 
      padding: 7px 0 5px;
    }

    .experience-skills {
      position: absolute;
      left: 15%;
      bottom: 2.5%; 
      width: 17.5%;

      li {
        border-top: 5px solid $gold;
        border-bottom: 5px solid $gold;
        margin-bottom: -5px;
        padding: 10px 0 8px;
      }
    }

    .contact {
      position: absolute;
      left: 33.75%;
      bottom: 1.4%; 
      width: 27%;
      border-bottom: 25px solid $charcoal;
      
      p {
        font-weight: $reg;
        margin-bottom: 5px;

        a {
          font-weight: $semi-bold;
        }
      }
    }
  }
}
</style>
