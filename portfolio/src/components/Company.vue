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
    alt: String,
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
        '--project-alt': this.alt,
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
      margin: 20px -20px 20px 0;
      transform-origin: top left;
      transform: rotate(-1deg);

      &::after {
        right: 50%;
        transform: rotate(4deg);
      }
    }
  }

  &:nth-child(even) {
    .projects {
      margin: 20px 0 20px -20px;
      transform-origin: top right;
      transform: rotate(1deg);

      &::after {
        left: 50%;
        transform: rotate(-7deg);
      }
    }
  }

  &:nth-child(1) {
    .projects {
      margin: 20px 0;
      transform: rotate(0);

      &::after {
        display: none;
      }
    }
  }

  &:nth-child(2) {
    .projects {
      margin: 20px 0;
      transform: rotate(.5deg);

      &::after {
        display: none;
      }
    }
  }

  &:last-child {
    .projects {
      &::after {
        display: none;
      }
    }
  }
}

.projects {
  color: var(--project-text);
  background-color: var(--project-bg);
  padding: 10px;
  z-index: -1;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 50vh;
    z-index: -10;
    mix-blend-mode: difference;
    background-color: var(--project-alt);
  }
}

.head {
  display: grid;
  align-items: center;
}

@media (min-width: 768px) {
  .projects {
    padding: 20px;

    &::after {
      width: 50vw;
      height: 25vh;
    }
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

@media (min-width: 1064px) {
  .company {
    width: 100vw;
    max-width: 1024px;

    &:nth-child(odd) {
      align-self: flex-end;
    }

    &:nth-child(even) {
      align-self: flex-start;
    }

    &:nth-child(1),
    &:nth-child(2) {
      align-self: center;
    }
  }

  .projects {
    &::after {
      height: 50vh;
    }
  }
}
</style>
