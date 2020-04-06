<template>
  <div id="education">
    <School
      name="Institut für Lernsysteme"
      :logo="require('../assets/ils.svg')"
      url="https://www.ils.de/"
      degree=""
      ongoing
    />
    <School
      name="Wilhelm Wagenfeld Schule"
      :logo="require('../assets/wws.svg')"
      url="https://wilhelm-wagenfeld-schule.eu/"
      degree="Abitur"
    />
    <School
      name="Karlsruher Institut für Technologie"
      :logo="require('../assets/kit.svg')"
      url="https://www.kit.edu/"
    />
    <School
      name="it.schule stuttgart"
      :logo="require('../assets/its.svg')"
      url="https://www.its-stuttgart.de/"
      degree="Fachinformatik Richtung Anwendungsentwicklung"
    />
  </div>
</template>

<script>
import School from './School.vue';

export default {
  name: 'Education',
  components: {
    School,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#education {
  margin-top: 40px;
  padding: 100px;
  min-height: 50vh;
  display: grid;
  align-items: center;
  position: relative;
  justify-items: center;
  grid-gap: 40px;
  grid-template: repeat(auto-fit, minmax(100px, 1fr))/repeat(auto-fit, minmax(100px, 1fr));

  &::before {
    content: "Education";
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    left: 20px;
    top: 0;
  }
}

@media (min-width: 768px) {
  #education {
    width: 100vw;
    max-width: 1024px;
    margin: 40px auto 0;
    grid-template-rows: 1fr;
  }
}

@media (min-width: 1064px) {
  #education {
    &::before {
      left: 0;
    }
  }
}
</style>
