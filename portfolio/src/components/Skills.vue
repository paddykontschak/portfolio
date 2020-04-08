<template>
  <div id="skills">
    <div class="field">
      <h3>Web Technology</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'html5']" />
        <span>HTML</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'wordpress']" />
        <span>Wordpres</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'php']" />
        <span>PHP</span>
      </span>
      <span class="spacer">&nbsp;</span>
      <span>
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
        <span>CSS</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'sass']" />
        <span>SASS</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'less']" />
        <span>LESS</span>
      </span>
      <span class="spacer">&nbsp;</span>
      <span>
        <font-awesome-icon :icon="['fab', 'js']" />
        <span>Javascript</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'react']" />
        <span>React</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'vuejs']" />
        <span>Vue</span>
      </span>
    </div>
    <div class="field">
      <h3>Version Control</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'git']" />
        <span>Git</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'code-branch']" />
        <span>SVN</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'github']" />
        <span>Github, Gitlab, Bitbucket</span>
      </span>
    </div>
    <div class="field">
      <h3>Build Tools</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'yarn']" />
        <span>Yarn, Webpack</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'gulp']" />
        <span>Gulp</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'grunt']" />
        <span>Grunt</span>
      </span>
    </div>
    <div class="field">
      <h3>Development Tools</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'npm']" />
        <span>NPM</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'docker']" />
        <span>Docker</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'jira']" />
        <span>Jira, Redmine</span>
      </span>
    </div>
    <div class="field">
      <h3>Design</h3>
      <span>
        <font-awesome-icon :icon="['fas', 'palette']" />
        <span>Photoshop, Pixelmator, Gimp</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'drafting-compass']" />
        <span>Sketch, XD</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'bezier-curve']" />
        <span>Illustrator, Inkscape</span>
      </span>
    </div>
    <div class="field">
      <h3>User Experience</h3>
      <span>
        <font-awesome-icon :icon="['far', 'hand-pointer']" />
        <span>User Feedback</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'magic']" />
        <span>Animation, Transitions</span>
      </span>
      <span>
        <font-awesome-icon :icon="['far', 'moon']" />
        <span>Darkmode</span>
      </span>
    </div>
    <div class="field">
      <h3>Responsive Design</h3>
      <span>
        <font-awesome-icon :icon="['fas', 'mobile-alt']" />
        <span>Phone</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'tablet-alt']" />
        <span>Tablet</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fas', 'desktop']" />
        <span>Desktop</span>
      </span>
    </div>
    <div class="field">
      <h3>Browser Support</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'firefox-browser']" />
        <span>Firefox</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'chrome']" />
        <span>Chrome, Safari</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'internet-explorer']" />
        <span>IE 11 - Edge</span>
      </span>
    </div>
    <div class="field">
      <h3>Preferred OS</h3>
      <span>
        <font-awesome-icon :icon="['fab', 'apple']" />
        <span>macOS</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'ubuntu']" />
        <span>Ubuntu</span>
      </span>
      <span>
        <font-awesome-icon :icon="['fab', 'linux']" />
        <span>Debian, Arch</span>
      </span>
    </div>
    <!-- <div class="field">
      <h3>Game Development</h3>
      <font-awesome-icon :icon="['fab', 'unity']" />
    </div> -->
    <div class="field">
      <p class="and-more">... and more (but FontAwesome's icons are limited)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#skills {
  margin-top: 40px;
  min-height: 50vh;
  position: relative;

  svg {
    font-size: 25px;
  }

  &::before {
    content: "Skills";
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    left: 20px;
    top: 0;
  }

  .field {
    padding: 100px 20px 25px;
    text-align: center;
    align-items: center;
    display: grid;
    justify-items: center;
    grid-gap: 40px;
    grid-template: repeat(auto-fit, minmax(50px, 1fr)) / repeat(auto-fit, minmax(50px, 1fr));

    h3,
    .and-more {
      justify-self: start;
      text-align: left;
      grid-column: 1 / -1;
    }

    + .field {
      padding: 25px 20px;
    }

    .spacer {
      display: none;
    }

    span {
      span {
        margin-top: 20px;
        display: block;
      }
    }
  }
}

@media (min-width: 468px) {
  #skills {
    svg {
      font-size: 35px;
    }

    .field {
      // padding: 100px 20px 50px;
      grid-gap: 80px;
      grid-template: repeat(auto-fit, minmax(50px, 1fr)) / repeat(4, 1fr);

      + .field {
        padding: 50px 20px;
      }

      h3 {
        grid-column: 1 / 1;
        grid-row: 1 / -1;
      }

      .spacer {
        display: block;
      }
    }
  }
}

@media (min-width: 768px) {
  #skills {
    width: 100vw;
    max-width: 1024px;
    margin: 40px auto 0;

    svg {
      font-size: 50px;
    }

    .field {
      padding: 100px 40px 50px 40px;
      grid-gap: 120px;
    }
  }
}

@media (min-width: 1064px) {
  #skills {
    &::before {
      left: 0;
    }
  }
}
</style>
