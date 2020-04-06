<template>
  <div class="dates">
    <div
      v-if="from"
      class="from"
    >
      <span v-if="ongoing">since</span>
      {{ new Date(from).toLocaleString('default', { month: 'long' }) }}
      <span class="year">{{ new Date(from).getFullYear() }}</span>
    </div>
    <div
      v-if="to"
      class="to"
    >
      {{ new Date(to).toLocaleString('default', { month: 'long' }) }}
      <span class="year">{{ new Date(to).getFullYear() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dates',
  props: {
    from: String,
    to: String,
    ongoing: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dates {
  font-size: 20px;
}

.year {
  font-weight: 700;
}

@media (min-width: 768px) {
  .dates {
    text-align: right;
  }
}

@media (min-width: 1044px) {
  .to {
    .company:nth-child(odd) & {
      mix-blend-mode: difference;
      filter: invert(1) grayscale(1) contrast(10);
    }

    .company:nth-child(1) & {
      mix-blend-mode: none;
      filter: none;
    }
  }
}
</style>
