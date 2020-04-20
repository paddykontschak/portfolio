<template>
  <div id="education">
    <School
      name="Institut für Lernsysteme"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati saepe repellendus maiores iste nulla, veritatis magni debitis sed cumque,
        dolorum laboriosam magnam nesciunt quis quae quo ex, animi minus ipsam."
      :logo="require('../assets/ils.svg')"
      url="https://www.ils.de/"
      from="2019"
      degree=""
      status="ongoing"
    />
    <School
      name="it.schule stuttgart"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati saepe repellendus maiores iste nulla, veritatis magni debitis sed cumque,
        dolorum laboriosam magnam nesciunt quis quae quo ex, animi minus ipsam."
      :logo="require('../assets/its.svg')"
      url="https://www.its-stuttgart.de/"
      from="2015"
      to="2017"
      degree="Fachinformatik Richtung Anwendungsentwicklung"
    />
    <School
      name="Karlsruher Institut für Technologie"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati saepe repellendus maiores iste nulla, veritatis magni debitis sed cumque,
        dolorum laboriosam magnam nesciunt quis quae quo ex, animi minus ipsam."
      :logo="require('../assets/kit.svg')"
      url="https://www.kit.edu/"
      from="2013"
      to="2014"
      degree=""
      status="cancelled"
    />
    <School
      name="Wilhelm Wagenfeld Schule"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati saepe repellendus maiores iste nulla, veritatis magni debitis sed cumque,
        dolorum laboriosam magnam nesciunt quis quae quo ex, animi minus ipsam."
      :logo="require('../assets/wws.svg')"
      url="https://wilhelm-wagenfeld-schule.eu/"
      from="2006"
      to="2009"
      degree="Abitur"
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
  padding: 80px 20px 40px;
  min-height: 50vh;
  display: grid;
  align-items: top;
  position: relative;
  justify-items: center;
  grid-gap: 20px;

  &::before {
    content: "Education";
    font-weight: 700;
    font-size: 1.5em;
    position: absolute;
    padding-top: 40px;
    left: 20px;
    top: 0;
  }
}

@media (min-width: 768px) {
  #education {
    width: 100vw;
    max-width: 1024px;
    padding: 100px 20px;
    margin: 40px auto 0;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1064px) {
  #education {
    padding: 100px 0;

    &::before {
      left: 0;
    }
  }
}
</style>
