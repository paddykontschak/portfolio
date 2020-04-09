<template>
  <div class="school">
    <div class="logo" :style=style></div>
    <div class="description">
      <h4>{{ name }}</h4>
      <p v-if="description">{{ description }}</p>
      <h5 v-if="from && to">{{ from }} - {{ to }}</h5>
      <h5 v-else-if="from && !to">since {{ from }}</h5>
      <h5 v-if="status == 'ongoing'">Currently attending</h5>
      <h5 v-if="status == 'cancelled'">Dropped out</h5>
      <h5 v-if="degree">Degree: {{ degree }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: {
    name: String,
    logo: String,
    url: String,
    from: String,
    to: String,
    degree: String,
    description: String,
    status: String,
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

.description {
  margin-top: 20px;

  h5 {
    margin: 0;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1044px) {
}
</style>
