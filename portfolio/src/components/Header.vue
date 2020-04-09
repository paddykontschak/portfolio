<template>
  <div id="header">
    <div class="teaser"></div>
    <div class="wrapper">
      <h1 v-if="hire">For Hire</h1>
      <div id="top">
        <h1>
          <span class="firstname">Patrick</span>
          <span class="lastname">Kontschak</span>
        </h1>
        <div id="social">
          <a href="https://twitter.com/paddykontschak" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="https://github.com/paddykontschak" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://codepen.io/paddykontschak/" target="_blank" rel="noopener">
            <font-awesome-icon :icon="['fab', 'codepen']" />
          </a>
        </div>
      </div>
      <div id="introduction">
        <h2><span class="prefix">{{ prefix }}</span> Developer</h2>
        <p>
          Hey, I'm a developer from Germany<br/>
          with over 9 years of professional experience all over the globe.<br/>
          <br/>
          I specialize in user experience, responsive design and modern CSS solutions.
        </p>
      </div>
      <div id="nav">
        <a href="#" v-scroll-to="'#skills'">
          Skills
        </a>
        <a href="#" v-scroll-to="'#education'">
          Education
        </a>
        <a href="#" v-scroll-to="'#work'">
          Work
        </a>
        <a href="#" v-scroll-to="'#about'">
          About
        </a>
        <a href="#" v-scroll-to="'#contact'">
          Contact
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    hire: Boolean,
  },

  data() {
    return {
      prefix: 'Frontend',
    };
  },

  mounted() {
    this.setPrefix();
  },

  methods: {
    setPrefix() {
      const prefixes = ['Fullstack', 'UI/UX', 'Frontend']; // add Game in the future
      let i = 0;

      setInterval(() => {
        this.prefix = prefixes[i];
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
  text-align: center;
  font-size: 20px;

  .teaser {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
    display: block;
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/javascript.jpg');
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
  }
}

h1 {
  line-height: .8;
  text-align: center;
}

h2 {
  font-weight: normal;

  .prefix {
    font-weight: bold;
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
    width: 50vw;
  }
}

#nav {
  align-self: end;

  a {
    display: block;
    padding: 10px;
  }
}

@media (min-width: 768px) {
  #header {
    .wrapper {
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
</style>
