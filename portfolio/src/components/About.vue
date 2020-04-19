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
        <p>
          Hey, I'm a developer from Germany
          with over 9 years of professional experience all over the globe.
        </p>
        <p>I specialize in user experience, responsive design and modern CSS solutions.</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
//   props: {
//     name: String,
//     logo: String,
//     url: String,
//     degree: String,
//     ongoing: Boolean,
//   },
//   computed: {
//     style() {
//       return {
//         'background-image': `url('${this.logo}')`,
//       };
//     },
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
}

.wrapper {
  padding: 20px;
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
  filter: saturate(0) invert(1);

  span {
    mix-blend-mode: difference;
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

  @media (prefers-color-scheme: dark) {
    filter: none;
  }
}

.about-me {
  margin: 0 -20px;
  padding: 20px;
  background-color: royalblue;

  p {
    &:first-child {
      margin-top: 0;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
}

@media (min-width: 768px) {
  .wrapper {
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(2, 1fr);
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
    margin: 0;
    grid-row: 3;
    grid-column: 2;
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
</style>
