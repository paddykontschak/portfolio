<template>
  <div id="header">
    <div class="teaser"></div>
    <div class="wrapper">
      <div id="top">
        <h1>
          <span class="firstname">Patrick</span>
          <span class="lastname">Kontschak</span>
        </h1>
        <div id="social">
          <a href="https://twitter.com/paddykontschak" target="_blank" rel="noopener" aria-label="Twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://github.com/paddykontschak" target="_blank" rel="noopener" aria-label="Github">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://codepen.io/paddykontschak/" target="_blank" rel="noopener" aria-label="Codepen">
            <font-awesome-icon :icon="['fab', 'codepen']" />
          </a>
        </div>
      </div>
      <div id="introduction">
        <h2>
          <span :class="['prefix', prefixClass]">{{ prefix }}</span> Developer
        </h2>
        <!-- <p>
          Hey, I'm a developer from Germany
          with over 9 years of professional experience all over the globe.
          <br/>
          <br/>
          I specialize in user experience, responsive design and modern CSS solutions.
        </p> -->
      </div>
      <div id="nav">
        <a href="#" v-scroll-to="'#skills'">
          Skills
        </a>
        <a href="#" v-scroll-to="'#work'">
          Work
        </a>
        <a href="#" v-scroll-to="'#about'">
          About
        </a>
        <!-- <a href="#" v-scroll-to="'#education'">
          Education
        </a> -->
        <!-- <a href="#" v-scroll-to="'#contact'">
          Contact
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      prefix: 'Frontend',
      prefixClass: 'frontend',
    };
  },

  mounted() {
    this.setPrefix();
  },

  methods: {
    setPrefix() {
      const prefixes = ['Fullstack', 'UI/UX', 'Frontend']; // add Game in the future
      const classes = ['fullstack', 'ui', 'frontend']; // add Game in the future
      let i = 0;

      setInterval(() => {
        this.prefix = prefixes[i];
        this.prefixClass = classes[i];
        i += 1;
        if (i === prefixes.length) i = 0;
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  font-size: 20px;

  .teaser {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    // z-index: -1;
    display: block;
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/vue.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // filter: brightness(25%);
    filter: blur(5px);
    opacity: .2;
  }

  .wrapper {
    // filter: invert(1);
    display: grid;
    height: 100vh;
    padding: 40px 0;
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
  }
}

h1 {
  line-height: .8;
  text-align: center;
}

h2 {
  font-weight: normal;

  .prefix {
    padding-bottom: 5px;
    vertical-align: middle;
    display: inline-block;
    font-weight: bold;
    text-align: right;

    &::before,
    &::after {
      opacity: .25;
      filter: blur(1px);
      display: block;
    }

    // &::before {
    //   background: linear-gradient(transparent, var(--text));
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    // }

    // &::after {
    //   background: linear-gradient(var(--text), transparent);
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    // }

    &.frontend {
      &::before {
        content: 'Fullstack';
      }

      &::after {
        content: 'UI/UX';
      }
    }

    &.ui {
      &::before {
        content: 'Frontend';
      }

      &::after {
        content: 'Fullstack';
      }
    }

    &.fullstack {
      &::before {
        content: 'UI/UX';
      }

      &::after {
        content: 'Frontend';
      }
    }
  }
}

a {
  text-decoration: none;
}

.firstname,
.lastname {
  display: block;
}

.firstname {
  font-size: 65px;
}

.lastname {
  font-size: 41px;
}

#social {
  text-align: center;
  margin-top: 40px;

  a {
    padding: 20px;
  }
}

#introduction {
  display: grid;
  align-self: center;
  justify-content: center;

  p {
    display: none;
    width: 300px;
    text-align: justify;
    text-align-last: center;
  }
}

#nav {
  align-self: end;


  a {
    display: block;
    padding: 10px 20px;
  }
}

@media (min-width: 768px) {
  #header {
    text-align: center;

    .wrapper {
      grid-template-rows: 85px auto 85px;
      padding: 40px;
    }
  }

  #top {
    display: flex;
    justify-content: space-between;
  }

  #social {
    margin-top: 0;

    a {
      padding: 5px;
    }
  }

  #introduction {
    p {
      display: block;
    }
  }

  #nav {
    display: flex;
    justify-self: center;
    justify-content: space-between;
  }
}

@media (min-width: 1064px) {
  #header {
    .wrapper {
      padding: 40px 0;
    }
  }
}

@media print {
  #header {
    grid-column: 1;
    grid-row: 1;
  }

  h1 {
    text-align: left;
    padding: 20px 0 0 20px;
  }

  .firstname {
    font-size: 35px;
  }

  .lastname {
    font-size: 22px;
  }

  #social,
  #introduction,
  #nav,
  .teaser {
    display: none !important;
  }

  .wrapper {
    padding: 0 !important;
    display: block !important;
    height: auto !important;
    max-width: none !important;
  }
}
</style>
