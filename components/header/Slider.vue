<template lang="pug">
  div
    header.masthead.text-center.d-flex
      div.container
        div.columns
          div.column
            div.my-auto
              div.row
                h1
                  strong.title.is-1 {{ $t('slider.title') }}
                hr.my-break
                p.text-description {{ $t('slider.description') }}
                nuxt-link.button.is-white.my-button.is-hidden-mobile(to="/readmore") {{ $t('slider.readmore') }}
          div.column.is-hidden-mobile
            img(src="/svg/Slider.svg" alt="slider").svg-slider
      div.--canvas
        canvas#canvas
</template>

<script>
  import animationSlider from '~/assets/javascript/animationSlider.js'
  import animationSVG from '~/assets/javascript/animationSVG.js'
  export default {
    mounted () {
      animationSlider()
      animationSVG()
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
</style>
