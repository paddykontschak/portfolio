<template>
  <div id="header">
    <h1 v-if="hire">For Hire</h1>
    <div class="top">
        <h1>
            <span class="firstname">Patrick</span>
            <span class="lastname">Kontschak</span>
        </h1>
        <div class="social">
            <a href="https://twitter.com/paddykontschak" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://github.com/paddykontschak" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://codepen.io/paddykontschak/" target="_blank" rel="noopener">
                <font-awesome-icon :icon="['fab', 'codepen']" />
            </a>
        </div>
    </div>
    <div class="nav">
        <a href="#work">
            Work
        </a>
        <a href="#education">
            Education
        </a>
        <a href="#skills">
            Skills
        </a>
        <a href="#contact">
            Contact
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    hire: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
    display: grid;
    height: 100vh;
    text-align: center;
    font-size: 20px;
    padding: 40px 0;
}

h1 {
    line-height: .8;
    text-align: center;
}

a {
    text-decoration: none;
}

.firstname,
.lastname {
    display: block;
}

.firstname {
    font-size: 65px;
}

.lastname {
    font-size: 41px;
}

.social {
    margin-top: 40px;

    a {
        padding: 20px;
    }
}

.nav {
    align-self: end;

    a {
        display: block;
        padding: 10px;
    }
}

@media (min-width: 768px) {
    #header {
        padding: 40px;
    }

    .top {
        display: flex;
        justify-content: space-between;
    }

    .social {
        margin-top: 0;

        a {
            padding: 5px;
        }
    }

    .nav {
        display: flex;
        justify-self: center;
        justify-content: space-between;
    }
}

@media (min-width: 1064px) {
    #header {
        padding: 40px 0;
    }
}
</style>
