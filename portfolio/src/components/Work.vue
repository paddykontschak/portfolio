<template>
  <div id="work">
    <Company
      name="planetmutlu"
      from="16.04.2018"
      to="29.02.2020"
      url="https://planetmutlu.com/"
      position="Web Developer"
      country="Germany"
      bg="#EF7D00"
      color="#FFF"
      v-bind:projects="planetmultu"
    />
    <Company
      name="Becklyn Studios GmbH"
      from="01.09.2016"
      to="30.11.2017"
      url="https://www.becklyn.com/"
      position="Web Developer / Apprentice"
      country="Germany"
      bg="#1c57e1"
      color="#FFF"
      v-bind:projects="becklyn"
    />
    <Company
      name="FUF // Frank und Freunde"
      from="01.07.2015"
      to="31.08.2016"
      url="https://www.fuf.de/"
      position="Web Developer / Apprentice"
      country="Germany"
      bg="#FC4934"
      color="#FFF"
      v-bind:projects="fuf"
    />
    <Company
      name="1&1 Internet AG"
      from="01.07.2013"
      to="30.06.2015"
      url="https://www.1und1.de/"
      position="Web Developer"
      country="Germany"
      bg="#003d8f"
      color="#FFF"
      v-bind:projects="oneandone"
    />
    <Company
      name="Idea Couture Inc."
      from="01.05.2011"
      to="28.02.2012"
      url="https://ideacouture.com/"
      position="Web Developer"
      country="Canada"
      bg="#000"
      color="#FFF"
      v-bind:projects="ideacouture"
    />
    <Company
      name="Atomic 55"
      from="01.01.2011"
      to="30.04.2011"
      url="https://atomic55.net"
      position="Web Developer"
      country="Canada"
      bg="#FC8712"
      color="#FFF"
      v-bind:projects="atomic55"
    />
  </div>
</template>

<script>
import Company from './Company.vue';

export default {
  name: 'Work',
  components: {
    Company,
  },

  computed: {
    planetmultu() {
      const projects = [
        {
          name: 'UVHB',
          preview: 'uvhb.png',
          url: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'PHP', 'HTML', 'CSS (SCSS)', 'Javascript'],
        },
        {
          name: 'Kinomarkt Deutschland',
          preview: 'kinomarkt.png',
          url: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'PHP', 'HTML', 'CSS (SCSS)', 'Javascript (jQuery)'],
        },
        {
          name: 'Mund + Bruns',
          preview: 'mundundbruns.png',
          url: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'PHP', 'HTML', 'CSS (Tailwind)', 'Javascript'],
        },
        {
          name: 'Intern',
          preview: '',
          url: '',
          field: 'Development',
          tasks: ['PHP', 'HTML', 'CSS (SCSS)', 'Javascript (React)'],
        },
      ];

      return projects;
    },

    becklyn() {
      const projects = [
        {
          name: 'NetApp',
          preview: 'netapp.png',
          url: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'PHP', 'HTML', 'CSS (SCSS)', 'Javascript'],
        },
        {
          name: 'Berthold Leibinger Stiftung',
          preview: 'berthold.png',
          url: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'PHP', 'HTML', 'CSS (SCSS)', 'Javascript (jQuery)'],
        },
      ];

      return projects;
    },

    fuf() {
      const projects = [
        {
          name: 'Team Technik',
          preview: 'teamtechnik.png',
          url: '',
          field: 'Development',
          tasks: ['Typo3', 'HTML', 'SCSS', 'Javascript'],
        },
      ];

      return projects;
    },

    oneandone() {
      const projects = [
        {
          name: '1&1 Control Center',
          preview: 'oneandone.png',
          url: '',
          field: 'Development',
          tasks: ['Pustefix (Java)', 'Baselib, Qooxdoo (Javascript)', 'Maven'],
        },
      ];

      return projects;
    },

    ideacouture() {
      const projects = [
        {
          name: 'Aviva Community Fund',
          preview: 'aviva.png',
          url: '',
          field: 'Development',
          tasks: ['CakePHP', 'LESS', ''],
        },
      ];

      return projects;
    },

    atomic55() {
      const projects = [
        {
          name: '1&1 Control Center',
          preview: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'LESS', 'Baselib, Qooxdoo (Javascript)', 'Maven'],
        },
      ];

      return projects;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#work {
  padding: 20px;
  overflow: hidden;
}
</style>
