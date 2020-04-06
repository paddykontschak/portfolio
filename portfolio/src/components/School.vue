<template>
  <div class="school">
    <div class="logo" :style=style></div>
    <!-- {{ name }} -->
  </div>
</template>

<script>
export default {
  name: 'School',
  props: {
    name: String,
    logo: String,
    url: String,
    degree: String,
    ongoing: Boolean,
  },

  computed: {
    style() {
      return {
        'background-image': `url('${this.logo}')`,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  width: 100px;
  height: 100px;
  display: block;
  filter: saturate(0);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;

  &:hover {
    filter: saturate(1);
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1044px) {
}
</style>
