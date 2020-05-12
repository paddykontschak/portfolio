<template>
  <div class="project">
    <a
      v-if="preview && url"
      v-bind:href="url"
      target="_blank"
      rel="noopener"
    >
      <img
        v-bind:src="require(`../assets/${preview}`)"
        v-bind:alt="name"
        v-bind:title="name"
      />
      <font-awesome-icon :icon="['fas', 'external-link-alt']" />
    </a>
    <div v-else-if="preview">
      <img
        v-bind:src="require(`../assets/${preview}`)"
        v-bind:alt="name"
        v-bind:title="name"
      />
    </div>
    <div class="information">
      <div class="description">
        <h4 v-if="field">{{ field }}</h4>
        <p v-if="description">{{ description }}</p>
        <ul v-if="tasks">
          <li
            v-for="(task, index) in tasks"
            :key=index
          >
            {{task}}
          </li>
        </ul>
      </div>
      <span
        v-if="opensource"
        class="open-source"
      >
        <font-awesome-icon
          :icon="[
            'fab',
            'osi'
          ]"
          size="2x"
        />
        <span>Open Source</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    name: String,
    preview: String,
    url: String,
    field: String,
    description: String,
    tasks: Array,
    opensource: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  direction: ltr;
}

.description {
  margin: 30px 0;
}

.open-source {
  display: flex;
  align-items: center;
  font-weight: 700;

  span {
    background: linear-gradient(transparent 50%, #3DA639 10px);
  }

  svg {
    color: #1E531D;
    margin-right: 10px;
    border-radius: 100%;
    background-color: #3DA639;
  }
}

.project {
  a {
    color: #fff;
    position: relative;

    &:hover {
      filter: brightness(110%);
    }

    svg {
      position: absolute;
      right: 10px;
      bottom: 10px;
      mix-blend-mode: difference;
    }
  }

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

  .company:nth-child(1) & {
    .description {
      margin-right: 0;
      transform: rotate(0);
    }
  }

  .company:nth-child(2) & {
    .description {
      margin-left: 5vw;
      transform: rotate(-.5deg);
    }
  }

  #active & {
    .description {
      margin-left: 0;
      transform: rotate(0);
    }
  }
}

@media (min-width: 768px) {
  .project {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 40px;
    grid-template-columns: calc(75% - 20px) calc(25% - 20px);

    + .project {
      margin-top: 20px;
    }

    .information {
      display: grid;
    }

    .open-source {
      align-self: end;
    }

    .company:nth-child(odd) & {
      margin-right: 5vw;

      &:nth-child(even) {
        direction: rtl;

        .description {
          text-align: right;
        }

        .open-source {
          direction: ltr;
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
          text-align: left;
        }
      }

      &:nth-child(odd) {
        direction: rtl;

        .description {
          text-align: right;
        }

        .open-source {
          direction: ltr;
        }
      }

      .description {
        margin-left: 0;
      }
    }

    .company:nth-child(1) &,
    .company:nth-child(2) & {
      margin-right: 0;
      margin-left: 0;
    }
  }
}

@media print {
  .project {
    a,
    img {
      display: none !important;
    }

    + .project {
      margin-top: 20px;
    }
  }

  .description {
    font-size: .8em;
    margin: 0 !important;

    p,
    li {
      margin: 0;
    }
  }
}
</style>
