<template>
  <div id="about">
    <div class="wrapper">
      <h2>
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </h2>
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

h2 {
  display: grid;
  justify-items: center;
  align-content: center;
  text-transform: uppercase;
  grid-template: repeat(auto-fit, minmax(calc(100vw / 4), 1fr))
                / repeat(auto-fit, minmax(calc(100vw / 4), 1fr));

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw / 4);
    height: calc(100vw / 4);
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1044px) {
}
</style>
