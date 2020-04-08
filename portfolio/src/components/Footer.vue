<template>
  <div id="footer">
    <div id="face">
      <span class="firstname">
        <span>P</span>
        <span>a</span>
        <span>t</span>
        <span>r</span>
        <span>i</span>
        <span>c</span>
        <span>k</span>
      </span>
      <span class="lastname">
        <span>K</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>s</span>
        <span>c</span>
        <span>h</span>
        <span>a</span>
        <span>k</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
//   props: {
//     from: String,
//     to: String,
//     ongoing: Boolean,
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*
  variable fonts
  based on mouse cursor
*/

#footer {
  padding: 100px 0;
  text-align: center;
}

#face {
  font-size: 30px;
  position: relative;
  text-transform: uppercase;

  &::after {
    filter: invert(1);
    content: '';
    position: absolute;
    z-index: -1;
    width: 275px;
    height: 125px;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 40% 60% 59% 41% / 15% 57% 43% 85% ;
    border: solid 10px rebeccapurple;
    border-color: transparent transparent rebeccapurple transparent;
    transform: rotate(10deg);
  }

  .firstname,
  .lastname {
    display: block;
  }

  .firstname {
    span {
      opacity: .5;
      display: inline-block;

      &:nth-child(2),
      &:nth-child(6) {
        opacity: 1;
        font-size: 60px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          z-index: -1;
        }
      }

      &:nth-child(1) {
        transform: rotate(35deg) translate(-100%, -50%);
      }

      &:nth-child(2) {
        filter: invert(1);
        transform: rotate(200deg);

        &::before {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid pink;
          bottom: 30%;
          // background-color: pink;
        }
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(-50%);
      }

      &:nth-child(4) {
        transform: rotate(-180deg) translate(30%, -50%);
      }

      &:nth-child(5) {
        transform: rotate(25deg) translate(50%, 45%);
      }

      &:nth-child(6) {
        filter: invert(1);
        transform: rotate(-100deg);

        &::before {
          width: 50px;
          height: 50px;
          bottom: 20%;
          border-radius: 100%;
          background-color: orange;
        }
      }

      &:nth-child(7) {
        transform: rotate(-45deg) translate(100%, -50%);
      }
    }
  }

  .lastname {
    position: relative;

    span {
      opacity: .5;
      display: inline-block;

      &:nth-child(1) {
        transform: rotate(35deg) translateY(50%);
      }

      &:nth-child(2) {
        opacity: 1;
        transform: translate(-50%, 100%);
      }

      &:nth-child(3) {
        transform: rotate(150deg) translate(150%, -100%);
      }

      &:nth-child(4) {
        transform: rotate(40deg) translate(200%, 150%);
      }

      &:nth-child(5) {
        opacity: 1;
        transform: rotate(-10deg) translate(-50%, 200%);
      }

      &:nth-child(6) {
        z-index: -2;
        transform: rotate(90deg) translate(300%, -25%);
      }

      &:nth-child(7) {
        transform: rotate(110deg) translate(225%, -100%);
      }

      &:nth-child(8) {
        opacity: 1;
        transform: rotate(-30deg) translate(-25%, 150%);
      }

      &:nth-child(9) {
        opacity: 1;
        transform: rotate(-120deg) translateX(-200%);
      }
    }
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1044px) {
}
</style>
