<template>
  <div id="work">
    <div id="active">
      <Company
        name="mymuesli"
        from="2020-07-15"
        url="https://mymuesli.com/"
        position="Web Developer"
        country="Germany"
        bg="#dc0050"
        alt="#DDDDD9"
        color="#fff"
        ongoing
        v-bind:projects="mymuesli"
      />
    </div>
    <div id="previous">
      <Company
        name="Mischbar"
        from="2020-05-01"
        to="2020-06-01"
        url="https://mischbar.net/"
        position="Web Developer"
        country="Germany"
        bg="#fff"
        alt="#DDDDD9"
        color="#000"
        v-bind:projects="mischbar"
      />
      <!-- <Company
        name="Dofuslab"
        from="2020-04-30"
        url="https://gamebrary.com/"
        position="Web Developer"
        country="Internet"
        bg="#95BD0C"
        alt="#DDDDD9"
        color="#000"
        ongoing
        opensource
        v-bind:projects="dofuslab"
      /> -->
      <Company
        name="Gamebrary"
        from="2019-12-15"
        to="2020-03-13"
        url="https://gamebrary.com/"
        position="Web Developer"
        country="Internet"
        bg="#222226"
        alt="#DDDDD9"
        color="#FFF"
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
        alt="#0F81FF"
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
        alt="#E3A71D"
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
        alt="#02B5CB"
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
        alt="#FFC26F"
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
        alt="#61B775"
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
        alt="#0277ED"
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
        alt="#3C3C3C"
        color="#000"
        opensource
        v-bind:projects="wilberlovesapple"
      />
    </div>
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
    mymuesli() {
      const projects = [
        {
          name: 'mymuesli',
          preview: 'mymuesli.webp',
          url: 'https://mymuesli.com/',
          field: 'Development',
          description: 'Various improvements and new features for a German brand of breakfast cereals',
          tasks: ['PHP', 'SCSS', 'ES6'],
        },
        {
          name: 'Intern',
          preview: 'mymuesli-remote.webp',
          url: '',
          field: 'Working from home',
          description: '',
          tasks: [''],
        },
      ];

      return projects;
    },

    mischbar() {
      const projects = [
        {
          name: 'mischbar',
          preview: 'mischbar.webp',
          url: 'https://mischbar.net/',
          field: 'Development',
          description: 'Website relaunch for a restaurant in Nuremberg',
          tasks: ['Wordpress', 'CSS'],
        },
      ];

      return projects;
    },

    dofuslab() {
      const projects = [
        {
          name: 'Dofuslab',
          preview: 'dofuslab.webp',
          url: 'https://dofuslab.io/',
          field: 'Development Support',
          description: 'Documentation and bugfixing for an open source set builder for a French MMO',
          tasks: ['Documentation', 'CSS'],
        },
      ];

      return projects;
    },

    gamebrary() {
      const projects = [
        {
          name: 'Gamebrary',
          preview: 'gamebrary.webp',
          url: 'https://gamebrary.com/',
          field: 'Feature Development',
          description: 'Various features for an open source game collection tracking website',
          tasks: ['Vue'],
        },
      ];

      return projects;
    },

    planetmultu() {
      const projects = [
        {
          name: 'UVHB',
          preview: 'uvhb.webp',
          url: 'https://uvhb.de/',
          field: 'Development',
          description: 'Complete website overhaul and relaunch for the business associations in Bremen',
          tasks: ['Wordpress Theming', 'Javascript'],
        },
        {
          name: 'PMKino',
          preview: 'pmkino-alt.webp',
          url: 'https://planetmutlu.com/project/pmkino-websites/',
          field: 'Feature Development',
          description: 'Various features for a modern cinema whitelabel solution',
          tasks: ['Wordpress Core', 'React'],
        },
        {
          name: 'Kinomarkt Deutschland',
          preview: 'kinomarkt.webp',
          url: 'https://kinomarktdeutschland.de/',
          field: 'Development',
          description: 'Registration website for a new cinema cooperative for Germany',
          tasks: ['Wordpress Theming', 'jQuery'],
        },
        {
          name: 'Luv & Lee',
          preview: 'luvundlee.webp',
          url: 'https://www.luvundlee-amrum.de/',
          field: 'Development',
          description: 'Single Page Website for a documentary about the island Amrum',
          tasks: ['Wordpress Theming', 'Javascript'],
        },
        {
          name: 'Mund + Bruns',
          preview: 'mundundbruns.webp',
          url: 'https://mund-bruns.de/',
          field: 'Development',
          description: 'Website relaunch for an international hanseatic cargo company',
          tasks: ['Wordpress Theming', 'Javascript'],
        },
        {
          name: 'Intern',
          preview: 'planetmutlu-alt.webp',
          url: '',
          field: 'Other work at this company',
          description: 'Minor and major adjustments, bugfixing and general development for various client work and internal projects',
          tasks: ['PHP', 'SCSS', 'React', 'Electron'],
        },
      ];

      return projects;
    },

    becklyn() {
      const projects = [
        {
          name: 'NetApp',
          preview: 'netapp.webp',
          url: 'https://web.archive.org/web/20190731124332/http://data-analytics.netapp.com/en/',
          field: 'Development',
          description: 'Animation-rich website for Big Data',
          tasks: ['Symfony', 'ES6'],
        },
        {
          name: 'Berthold Leibinger Stiftung',
          preview: 'berthold.webp',
          url: 'https://www.leibinger-stiftung.de/',
          field: 'Development',
          description: 'Clean and modern website for a German foundation',
          tasks: ['Symfony', 'ES6'],
        },
        {
          name: 'Intern',
          preview: 'becklyn.webp',
          url: '',
          field: 'Apprenticeship',
          description: 'Second year of my Fachinformatik apprenticeship',
          tasks: [''],
        },
      ];

      return projects;
    },

    fuf() {
      const projects = [
        {
          name: 'Team Technik',
          preview: 'teamtechnik.webp',
          url: 'https://web.archive.org/web/20170612030259/http://www.teamtechnik.com/',
          field: 'Development',
          description: 'Website relaunch for an automation and trade fair organisation',
          tasks: ['Typo3', 'Javascript'],
        },
        {
          name: 'Jeanee',
          preview: 'jeanee.webp',
          url: 'https://www.jeanee.de/',
          field: 'Core Feature Development',
          description: 'Core features for a mobile-first CMS to create single page website without coding knowledge',
          tasks: ['Angular'],
        },
        {
          name: 'Intern',
          preview: 'fuf.webp',
          url: '',
          field: 'Apprenticeship',
          description: 'First year of my Fachinformatik apprenticeship',
        },
      ];

      return projects;
    },

    oneandone() {
      const projects = [
        {
          name: '1&1 Control Center',
          preview: 'oneandone.webp',
          url: 'https://account.1und1.de/',
          field: 'Development',
          description: 'Redesign of the control center and the customer relations tool with an international team of web developers',
          tasks: ['Pustefix (Java)', 'Baselib, Qooxdoo (Javascript)', 'Maven'],
        },
      ];

      return projects;
    },

    ideacouture() {
      const projects = [
        {
          name: 'MISC Magazine',
          preview: 'misc.webp',
          url: 'https://web.archive.org/web/20120523071023/http://www.miscmagazine.com:80/',
          field: 'Development Support',
          description: 'Minor adjustments, bugfixing and general development for a design magazine',
          tasks: ['CakePHP', 'jQuery'],
        },
        {
          name: 'Aviva Community Fund',
          preview: 'aviva.webp',
          url: 'http://web.archive.org/web/20110902084811/http://www.avivacommunityfund.org:80/',
          field: 'Development',
          description: 'Crowdfunding website for an annually recurring community fund',
          tasks: ['CakePHP', 'jQuery'],
        },
        {
          name: 'Intern',
          preview: 'toronto.webp',
          url: '',
          field: 'Other work at this company',
          description: 'Prototypes for possible projects for Fortune 500 companies',
          tasks: ['Bootstrap', 'SASS', 'LESS', 'CoffeeScript', 'Backbone', 'Mustache'],
        },
      ];

      return projects;
    },

    atomic55() {
      const projects = [
        {
          name: 'CMS Theming',
          preview: 'atomic55.webp',
          url: '',
          field: 'Development',
          description: 'Various themes for Canadian realtors',
          tasks: ['Custom CMS theming', 'LESS', 'jQuery'],
        },
      ];

      return projects;
    },

    wilberlovesapple() {
      const projects = [
        {
          name: 'Wilber Loves Apple',
          preview: 'wilberlovesapple.webp',
          url: 'https://web.archive.org/web/20080309013625/http://darwingimp.sourceforge.net:80/',
          field: 'Software Porting',
          description: 'Providing an unofficial Mac OS X Tiger port for the popular open source image editor',
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
}

#active,
#previous {
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;

  &::before {
    content: "Headline";
    font-weight: 700;
    font-size: 1.5em;
  }
}

#active {
  &::before {
    content: "Active Projects";
  }
}

#previous {
  &::before {
    content: "Previous Projects";
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1044px) {
  #active,
  #previous {
    align-items: center;

    &::before {
      width: 100vw;
      max-width: 1024px;
    }
  }
}

@media print {
  #work {
    display: grid;
    grid-column: 1;
    grid-row: 2;
  }

  #active,
  #previous {
    position: relative;
    overflow: visible;
  }

  #active {
    padding-bottom: 0;

    &::before {
      content: "Work Experience";
      text-transform: uppercase;
      font-size: 1em;
    }
  }

  #previous {
    padding-top: 0;

    &::before {
      display: none;
    }
  }
}
</style>
