<template>
  <div id="skills">
    <div class="field">
      <h3>Web Technology</h3>
      <font-awesome-icon :icon="['fab', 'css3-alt']" />
      <font-awesome-icon :icon="['fab', 'sass']" />
      <font-awesome-icon :icon="['fab', 'less']" />
      <span class="spacer">&nbsp;</span>
      <font-awesome-icon :icon="['fab', 'html5']" />
      <font-awesome-icon :icon="['fab', 'js']" />
      <font-awesome-icon :icon="['fab', 'react']" />
      <span class="spacer">&nbsp;</span>
      <font-awesome-icon :icon="['fab', 'vuejs']" />
      <font-awesome-icon :icon="['fab', 'wordpress']" />
      <font-awesome-icon :icon="['fab', 'php']" />
    </div>
    <div class="field">
      <h3>Version Control</h3>
      <font-awesome-icon :icon="['fab', 'git']" />
      <font-awesome-icon :icon="['fab', 'github']" />
      <font-awesome-icon :icon="['fab', 'gitlab']" />
    </div>
    <div class="field">
      <h3>Build Tools</h3>
      <font-awesome-icon :icon="['fab', 'gulp']" />
      <font-awesome-icon :icon="['fab', 'grunt']" />
      <font-awesome-icon :icon="['fab', 'yarn']" />
    </div>
    <div class="field">
      <h3>Browser Support</h3>
      <font-awesome-icon :icon="['fab', 'firefox-browser']" />
      <font-awesome-icon :icon="['fab', 'chrome']" />
      <font-awesome-icon :icon="['fab', 'internet-explorer']" />
    </div>
    <div class="field">
      <h3>Development Tools</h3>
      <font-awesome-icon :icon="['fab', 'npm']" />
      <font-awesome-icon :icon="['fab', 'jira']" />
      <font-awesome-icon :icon="['fab', 'docker']" />
    </div>
    <div class="field">
      <h3>Preferred OS</h3>
      <font-awesome-icon :icon="['fab', 'apple']" />
      <font-awesome-icon :icon="['fab', 'linux']" />
      <font-awesome-icon :icon="['fab', 'ubuntu']" />
    </div>
    <!-- <div class="field">
      <h3>Game Development</h3>
      <font-awesome-icon :icon="['fab', 'unity']" />
    </div> -->
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
    padding: 100px 20px 50px;
    text-align: center;
    align-items: center;
    display: grid;
    justify-items: center;
    grid-gap: 40px;
    grid-template: repeat(auto-fit, minmax(25px, 1fr)) / repeat(auto-fit, minmax(25px, 1fr));

    h3 {
      justify-self: start;
      text-align: left;
      grid-column: 1 / -1;
    }

    + .field {
      padding-top: 50px;
    }

    .spacer {
      display: none;
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
