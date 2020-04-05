<template>
  <div class="project">
    <!-- {{ name }} -->
    <img
      v-if="preview"
      v-bind:src="require(`../assets/${preview}`)"
    />
    <div class="description">
      <h4>{{ field }}</h4>
      <ul v-if="tasks">
        <li
          v-for="(task, index) in tasks"
          :key=index
        >
          {{task}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    name: String,
    preview: String,
    field: String,
    tasks: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.description {
  margin: 30px 0;
}

.project {
  .company:nth-child(odd) & {
    .description {
      text-align: right;
      transform-origin: top left;
      transform: rotate(1deg);
      margin-right: 15vw;
    }
  }

  .company:nth-child(even) & {
    .description {
      text-align: left;
      transform-origin: top right;
      transform: rotate(-1deg);
      margin-right: 0;
      margin-left: 15vw;
    }
  }
}

@media (min-width: 768px) {
  .project {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 40px;

    + .project {
      margin-top: 40px;
    }

    &:nth-child(even) {
      direction: rtl;
    }

    .company:nth-child(odd) & {
      margin-right: 5vw;

      &:nth-child(even) {
        .description {
          text-align: right;
        }
      }

      &:nth-child(odd) {
        .description {
          text-align: left;
        }
      }

      .description {
        margin-right: 0;
      }
    }

    .company:nth-child(even) & {
      margin-left: 5vw;

      &:nth-child(even) {
        .description {
          text-align: right;
        }
      }

      &:nth-child(odd) {
        .description {
          text-align: left;
        }
      }

      .description {
        margin-left: 0;
      }
    }
  }
}

@media (min-width: 1064px) {
  .project {
    grid-template-columns: 75% 25%;
  }
}
</style>
