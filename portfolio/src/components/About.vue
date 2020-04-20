<template>
  <div id="about">
    <div class="wrapper">
      <div class="patrick">
        <img
          v-bind:src="require('../assets/patrick.png')"
        />
        <h2>
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
        </h2>
      </div>
      <div class="about-me">
        <h3>Hey</h3>
        <p>
          I'm a developer from Germany
          with over 9 years of professional experience all over the globe.
        </p>
        <p></p>
        <p>I specialize in user experience, responsive design and modern CSS solutions.</p>
        <span
          v-if=hire
          v-html="email"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    hire: Boolean,
  },

  computed: {
    email() {
      let email = '';

      email += '<a href="mailto:';
      email += '&#104;&#101;&#108;';
      email += '&#108;&#111;&#64;';
      email += '&#112;&#97;&#116;';
      email += '&#114;&#105;&#99;';
      email += '&#107;&#107;&#111;';
      email += '&#110;&#116;&#115;';
      email += '&#99;&#104;&#97;';
      email += '&#107;&#46;&#99;';
      email += '&#111;&#109;';
      email += '" style="color: royalblue; text-decoration: none;">';
      email += 'Hire me</a>';

      return email;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
}

.wrapper {
  padding: 20px 20px 0;
  margin-bottom: 70px;
}

img {
  max-width: 100%;
  align-self: end;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}

.patrick {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  position: relative;

  &::after {
    content: '';
    width: 50vw;
    height: 50vw;
    top: 0;
    right: 0;
    position: absolute;
    border-radius: 0 100% 0 0;
    mix-blend-mode: difference;
    background-color: purple;
  }
}

h2 {
  align-self: start;
  grid-row: 2;
  grid-column: 1 / -1;
  text-transform: uppercase;
  font-size: 2.5em;

  span {
    filter: saturate(0) invert(1);
    mix-blend-mode: difference;

    @media (prefers-color-scheme: dark) {
      filter: none;
    }
  }

  &::before {
    content: '';
    width: 30vw;
    height: 30vw;
    top: 45%;
    left: 10vw;
    position: absolute;
    border-radius: 100%;
    background-color: crimson;
  }
}

.about-me {
  margin: 0 -20px;
  padding: 20px;
  display: grid;
  align-content: stretch;
  position: relative;
  background-color: royalblue;

  span,
  h3 {
    top: -.9em;
    font-size: 4em;
    left: 15px;
    font-weight: 700;
    position: absolute;
    color: royalblue;
    text-transform: uppercase;
  }

  span {
    top: auto;
    left: auto;
    right: 15px;
    bottom: -.95em;
  }

  p {
    &:first-child {
      margin-top: 0;
    }

    &:nth-last-of-type(1) {
      margin-bottom: 0;
      align-self: end;
      text-align: right;
    }
  }
}

@media (min-width: 768px) {
  .wrapper {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    width: 100vw;
    max-width: 1024px;
    margin: 0 auto;
  }

  .patrick {
    grid-row: 1 / -1;
    grid-column: 1;

    &::after {
      width: 25vw;
      height: 25vw;
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 100% 0 0 0;
    }
  }

  h2 {
    &::before {
      width: 15vw;
      height: 15vw;
      bottom: 35%;
      top: auto;
      left: auto;
      right: 5vw;
    }
  }

  .about-me {
    margin: 50% 0;
    grid-row: 1 / -1;
    grid-column: 2;

    h3 {
      left: 10px;
      top: -.85em;
    }

    span {
      right: 10px;
    }
  }
}

@media (min-width: 1044px) {
  .patrick {
    &::after {
      width: 250px;
      height: 250px;
    }
  }

  h2 {
    &::before {
      width: 150px;
      height: 150px;
      right: 15%;
    }
  }
}

@media print {
  #about {
    display: none !important;
  }
}
</style>
