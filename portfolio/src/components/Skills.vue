<template>
  <div id="skills">
    <font-awesome-icon :icon="['fab', 'css3-alt']" />
    <font-awesome-icon :icon="['fab', 'sass']" />
    <font-awesome-icon :icon="['fab', 'less']" />
    <font-awesome-icon :icon="['fab', 'html5']" />
    <font-awesome-icon :icon="['fab', 'bootstrap']" />
    <font-awesome-icon :icon="['fab', 'js']" />
    <font-awesome-icon :icon="['fab', 'react']" />
    <font-awesome-icon :icon="['fab', 'vuejs']" />
    <font-awesome-icon :icon="['fab', 'angular']" />
    <font-awesome-icon :icon="['fab', 'php']" />
    <font-awesome-icon :icon="['fab', 'wordpress']" />
    <font-awesome-icon :icon="['fab', 'git']" />
    <font-awesome-icon :icon="['fab', 'github']" />
    <font-awesome-icon :icon="['fab', 'gitlab']" />
    <font-awesome-icon :icon="['fab', 'bitbucket']" />
    <font-awesome-icon :icon="['fab', 'osi']" />
    <font-awesome-icon :icon="['fab', 'gulp']" />
    <font-awesome-icon :icon="['fab', 'grunt']" />
    <font-awesome-icon :icon="['fab', 'yarn']" />
    <font-awesome-icon :icon="['fab', 'firefox-browser']" />
    <font-awesome-icon :icon="['fab', 'chrome']" />
    <font-awesome-icon :icon="['fab', 'internet-explorer']" />
    <font-awesome-icon :icon="['fab', 'npm']" />
    <font-awesome-icon :icon="['fab', 'docker']" />
    <font-awesome-icon :icon="['fab', 'jira']" />
    <font-awesome-icon :icon="['fab', 'jenkins']" />
    <font-awesome-icon :icon="['fab', 'apple']" />
    <font-awesome-icon :icon="['fab', 'linux']" />
    <font-awesome-icon :icon="['fab', 'ubuntu']" />
    <font-awesome-icon :icon="['fab', 'python']" />
    <font-awesome-icon :icon="['fab', 'java']" />
    <font-awesome-icon :icon="['fab', 'typo3']" />
    <font-awesome-icon :icon="['fab', 'unity']" />
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
  padding: 100px 20px;
  min-height: 50vh;
  display: grid;
  font-size: 25px;
  text-align: center;
  align-items: center;
  position: relative;
  justify-items: center;
  grid-gap: 40px;
  grid-template: repeat(auto-fit, minmax(25px, 1fr)) / repeat(auto-fit, minmax(25px, 1fr));

  &::before {
    content: "Skills";
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    left: 20px;
    top: 0;
  }
}

@media (min-width: 768px) {
  #skills {
    padding: 100px;
    width: 100vw;
    max-width: 1024px;
    grid-gap: 120px;
    font-size: 50px;
    margin: 40px auto 0;
    grid-template: repeat(auto-fit, minmax(50px, 1fr)) / repeat(auto-fit, minmax(50px, 1fr));
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
