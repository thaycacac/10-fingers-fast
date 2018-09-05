<template>
    <div>
        <header class="masthead text-center d-flex">
            <div class="container">
                <div class="columns ">
                    <div class="column">
                        <div class=" my-auto">
                            <div class="row">
                                <h1>
                                    <strong>Bàn Tay Ta Làm Nên Tất Cả</strong>
                                </h1>
                                <hr class="my-break">
                                <p class="text-description">Tìm hiểu các khái niệm, bài học cơ bản đến nâng cao của
                                    phương
                                    pháp 10
                                    ngón tay trong thời gian ngắn!</p>
                                <a class="button is-white my-button" href="#">Đọc thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <svg-slider></svg-slider>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
  import anime from 'animejs'
  import SvgSlider from '../../assets/svg/Slider.svg'
  export default {
    components: {
      SvgSlider
    },
    methods: {
      animate() {
        anime({
            targets: 'g.st0',
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 4000,
            delay: 500,
            easing: 'easeOutSine',
          })
      }
    },
    mounted() {
      return this.animate()
    }
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/sass/main.sass';

    h1 strong {
        color: white;
        text-transform: uppercase;
        font-weight: 700
    }

    .text-description {
        color: #e4e4e4;
        font-family: $font-opensan;
    }

    .my-break {
        height: 1px;
    }

    .my-button {
        margin-top: 35px;
        font-family: $font-opensan;
        font-size: 25px
    }
    svg#Layer_1 {
        margin-top: -45px;
    }
</style>