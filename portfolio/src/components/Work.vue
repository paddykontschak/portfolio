<template>
  <div id="work">
    <Company
      name="Gamebrary"
      from="2019-12-15"
      url="https://gamebrary.com/"
      position="Web Developer"
      country="Internet"
      bg="#222226"
      color="#FFF"
      ongoing
      opensource
      v-bind:projects="gamebrary"
    />
    <Company
      name="planetmutlu"
      from="2018-04-16"
      to="2020-02-29"
      url="https://planetmutlu.com/"
      position="Web Developer"
      country="Germany"
      bg="#EF7D00"
      color="#FFF"
      v-bind:projects="planetmultu"
    />
    <Company
      name="Becklyn Studios GmbH"
      from="2016-09-01"
      to="2017-11-30"
      url="https://www.becklyn.com/"
      position="Web Developer / Apprentice"
      country="Germany"
      bg="#1c57e1"
      color="#FFF"
      v-bind:projects="becklyn"
    />
    <Company
      name="FUF // Frank und Freunde"
      from="2015-07-01"
      to="2016-08-31"
      url="https://www.fuf.de/"
      position="Web Developer / Apprentice"
      country="Germany"
      bg="#FC4934"
      color="#FFF"
      v-bind:projects="fuf"
    />
    <Company
      name="1&1 Internet AG"
      from="2013-07-01"
      to="2015-06-30"
      url="https://www.1und1.de/"
      position="Web Developer"
      country="Germany"
      bg="#003d8f"
      color="#FFF"
      v-bind:projects="oneandone"
    />
    <Company
      name="Idea Couture Inc."
      from="2011-05-01"
      to="2012-02-29"
      url="https://ideacouture.com/"
      position="Web Developer"
      country="Canada"
      bg="#000"
      color="#FFF"
      v-bind:projects="ideacouture"
    />
    <Company
      name="Atomic 55"
      from="2011-01-01"
      to="2011-04-30"
      url="https://atomic55.net"
      position="Web Developer"
      country="Canada"
      bg="#FC8712"
      color="#FFF"
      v-bind:projects="atomic55"
    />
    <Company
      name="Wilber loves Apple"
      from="2007-09-01"
      to="2008-03-31"
      url="https://www.gimp.org/"
      position="Software Porter"
      country="Internet"
      bg="#c2c2c2"
      opensource
      v-bind:projects="wilberlovesapple"
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

  /*
  missing projects:

  pm:
  - PMKino
  - Luv & Lee
  - Job4u
  - Onlinebooking
  - Concession
  - Gewoba
  - Kino Kongress
  - Beckröge

  fuf:
  - website builder

  idea couture:
  - amex prototype

  atomic 55:
  - various realtor themes with their own cms - not wordpress
  */

  computed: {
    gamebrary() {
      const projects = [
        {
          name: 'Gamebrary',
          preview: 'gamebrary.png',
          url: '',
          field: 'Feature Development',
          tasks: ['HTML', 'SCSS', 'Vue'],
        },
      ];

      return projects;
    },

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
          name: '',
          preview: '',
          field: 'Development',
          tasks: ['Wordpress Theming', 'LESS', 'Baselib, Qooxdoo (Javascript)', 'Maven'],
        },
      ];

      return projects;
    },

    wilberlovesapple() {
      const projects = [
        {
          name: 'Wilber Loves Apple',
          preview: 'wilberlovesapple.png',
          url: 'https://web.archive.org/web/20080309013625/http://darwingimp.sourceforge.net:80/',
          field: 'Software Porting',
          tasks: ['Bash', 'Scripting', 'Objective-C'],
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
}
</style>
