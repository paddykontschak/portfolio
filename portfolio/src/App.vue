<template>
  <div id="app">
    <Header/>
    <Skills/>
    <Work/>
    <About/>
    <!-- <Education/> -->
    <!-- <Footer/> -->
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <font-awesome-icon :icon="['fas', 'chevron-up']" />
      </button>
    </back-to-top>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop';
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
// import Education from './components/Education.vue';
import Work from './components/Work.vue';
import About from './components/About.vue';
// import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Skills,
    // Education,
    Work,
    About,
    // Footer,
    BackToTop,
  },
};
</script>

<style lang="scss">
@import '~normalize.css';
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  background-color: var(--bg);
}

#app {
  overflow: hidden;
}

h1 {
  text-transform: uppercase;
}

h1,
h2,
h3,
h4 {
  margin: 0;

  a {
    text-decoration: none;
  }
}

h3 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  color: var(--text);

  &:hover {
    color: var(--hover);
  }
}

* {
  box-sizing: border-box;
}

:root {
  --text: #030303;
  --bg: #f9f9f9;
  --hover: #606060;
  --shadow: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #fff;
    --bg: #1d1f21;
    --hover: #bbb;
    --shadow: #282a2e;
  }
}

/* Settings */
:root {
  --offset: 1.5rem;
  --max_width: 72rem;
  --columns: 6;
  --gutter: .5rem;
  --baseline: 3rem;
  --baseline-shift: 2rem;
  --color: hsla(204, 80%, 72%, 0.25);
  --color-text: hsla(204, 80%, 72%, 1);
  --media-query: 'base';
}

@media (min-width: 35em) {
  :root {
    --offset: 2rem;
    --gutter: .75rem;
    --color: hsla(286, 51%, 44%, 0.25);
    --color-text: hsla(286, 51%, 44%, 1);
    --media-query: 'small';
  }
}

@media (min-width: 48em) {
  :root {
    --offset: 3rem;
    --columns: 12;
    --gutter: 1rem;
    --color: hsla(204, 80%, 72%, 0.25);
    --color-text: hsla(204, 80%, 72%, 1);
    --media-query: 'medium';
  }
}

@media (min-width: 70em) {
  :root {
    --offset: 4rem;
    --color: hsla(286, 51%, 44%, 0.25);
    --color-text: hsla(286, 51%, 44%, 1);
    --media-query: 'large';
  }
}

/* Helper variables */
:root {
  --repeating-width: calc(100% / var(--columns));
  --column-width: calc((100% / var(--columns)) - var(--gutter));
  --background-width: calc(100% + var(--gutter));
  --background-columns: repeating-linear-gradient(
    to right,
    var(--color),
    var(--color) var(--column-width),
    transparent var(--column-width),
    transparent var(--repeating-width)
  );
  --background-baseline: repeating-linear-gradient(
    to bottom,
    var(--color),
    var(--color) 1px,
    transparent 1px,
    transparent var(--baseline)
  );
}

html {
  &.debug {
    position: relative;

    &::before {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      margin-right: auto;
      margin-left: auto;
      width: calc(100% - (2 * var(--offset)));
      max-width: var(--max_width);
      min-height: 100vh;
      content: '';
      background-image: var(--background-columns), var(--background-baseline);
      background-size: var(--background-width) 100%;
      background-position: 0 var(--baseline-shift);
      z-index: 1000;
      pointer-events: none;
    }

    &::after {
      content: var(--media-query);
      position: fixed;
      top: 1rem;
      left: 1rem;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",sans-serif;
      color: var(--color-text);
    }
  }
}

.btn-to-top {
  color: var(--text);
  background-color: var(--bg);
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  opacity: .5;
  font-size: 22px;
  line-height: 22px;
  mix-blend-mode: difference;
  z-index: 100
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text: #030303;
      --bg: #f9f9f9;
      --hover: #606060;
      --shadow: #fff;
    }
  }

  #app {
    -webkit-print-color-adjust: exact;
    display: grid;
    grid-gap: 20px;
    grid-template: repeat(3, auto) / auto 30vw;
  }

  .btn-to-top {
    display: none !important;
  }
}
</style>
