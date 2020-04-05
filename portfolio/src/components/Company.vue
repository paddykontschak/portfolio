<template>
  <div class="company">
    <h2><a v-bind:href="url" target="_blank" rel="noopener">{{ name }}</a></h2>
    <h3>{{ position }}</h3>
    <div class="projects" :style=style>
      <Project
        v-for="(project, index) in projects"
        :key=index
        :name="project.name"
        :preview="project.preview"
        :field="project.field"
        :tasks="project.tasks"
      />
    </div>
  </div>
</template>

<script>
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
    projects: Array,
  },

  components: {
    Project,
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
  .projects {
    margin: 20px 0;
    transform-origin: top left;
    transform: rotate(-1deg);
  }

  &:nth-child(even) {
    .projects {
      margin-left: -20px;
      transform-origin: top right;
      transform: rotate(+1deg);
    }
  }
}

.projects {
  color: var(--project-text);
  background-color: var(--project-bg);
  padding: 10px;
  width: 100vw;
  max-width: 1024px;
}

@media (min-width: 768px) {
  .projects {
    padding: 20px;
  }
}
</style>
