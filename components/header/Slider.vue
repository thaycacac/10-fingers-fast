<template>
  <div>
    <header class="masthead text-center d-flex">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class=" my-auto">
              <div class="row">
                <h1>
                  <strong class="title is-1">Bàn Tay Ta Làm Nên Tất Cả</strong>
                </h1>
                <hr class="my-break">
                <p class="text-description">Tìm hiểu các khái niệm, bài học cơ bản đến nâng cao của phương pháp 10 ngón tay trong thời gian ngắn!</p>
                <a class="button is-white my-button" href="#">Đọc thêm</a>
              </div>
            </div>
          </div>
          <div class="column is-hidden-mobile">
            <svg-slider></svg-slider>
          </div>
        </div>
      </div>
      <div id="container">
        <canvas id="canvas"></canvas>
      </div>
    </header>
  </div>
</template>
<script>
  import anime from 'animejs'
  import SvgSlider from '../../assets/svg/Slider.svg'
  import animation from '../../assets/javascript/animationSlider.js'
  export default {
    components: {
      SvgSlider
    },
    methods: {
      animate () {
        anime({
          targets: 'g.st0',
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 4000,
          delay: 500,
          easing: 'easeOutSine'
        })
      }
    },
    mounted () {
      animation()
      // return this.animate()
    }
  }
</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>