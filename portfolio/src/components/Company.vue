<template>
  <div class="company">
    <div class="head">
      <h2>
        <a
          v-bind:href="url"
          target="_blank"
          rel="noopener"
        >
          {{ name }}
        </a>
      </h2>
      <h3>{{ position }}</h3>
      <Dates
        :from="from"
        :to="to"
        :ongoing="ongoing"
      />
    </div>
    <div class="projects" :style=style>
      <Project
        v-for="(project, index) in projects"
        :key=index
        :name="project.name"
        :preview="project.preview"
        :field="project.field"
        :tasks="project.tasks"
        :opensource="opensource"
      />
    </div>
  </div>
</template>

<script>
import Dates from './Dates.vue';
import Project from './Project.vue';

export default {
  name: 'Company',
  props: {
    name: String,
    from: String,
    to: String,
    url: String,
    position: String,
    country: String,
    bg: String,
    color: String,
    ongoing: Boolean,
    opensource: Boolean,
    projects: Array,
  },

  components: {
    Project,
    Dates,
  },

  computed: {
    style() {
      return {
        '--project-bg': this.bg,
        '--project-text': this.color,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.company {
  &:nth-child(odd) {
    .projects {
      margin: 20px 0;
      transform-origin: top left;
      transform: rotate(-1deg);
    }
  }

  &:nth-child(even) {
    .projects {
      margin: 20px 0 0 -20px;
      transform-origin: top right;
      transform: rotate(1deg);
    }
  }
}

.projects {
  color: var(--project-text);
  background-color: var(--project-bg);
  padding: 10px;
  width: 100vw;
  max-width: 1024px;
  z-index: -1;
}

.head {
  display: grid;
  align-items: center;

  .dates {
    mix-blend-mode: difference;
  }
}

@media (min-width: 768px) {
  .projects {
    padding: 20px;
  }

  .head {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
    margin-bottom: -30px;
    align-items: start;

    h3 {
      grid-row: 2;
      grid-column: 1;
    }

    .dates {
      justify-self: end;
      grid-row: 2 / span 2;
      grid-column: 2;
    }
  }
}
</style>
