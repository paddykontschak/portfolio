<template>
  <div id="app">
    <!-- <Header hire/> -->
    <Header/>
    <Work/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Work from './components/Work.vue';

export default {
  name: 'App',
  components: {
    Header,
    Work,
  },
};
</script>

<style lang="scss">
@import '~normalize.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  max-width: 1024px;
  margin: 0 auto;
}

h1,
h2,
h3 {
  text-transform: uppercase;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: var(--text);
}

* {
  box-sizing: border-box;
}

:root {
  --text: #4a4a4a;
  --bg: #f7f7f7;
  --hover: #646464;
  --shadow: #b0b0b0;
}

// @media (prefers-color-scheme: dark) {
//   :root {
//     --text: #f7f7f7;
//     --bg: #4a4a4a;
//     --hover: #b0b0b0;
//     --shadow: #646464;
//   }
// }
</style>
