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
                a.button.is-white.my-button(href#) {{ $t('slider.readmore') }}
          div.column.is-hidden-mobile
            svg-slider.svg-slider
      div.--canvas
        canvas#canvas
</template>
<script>
  import SvgSlider from '~/assets/svg/Slider.svg'
  import animationSlider from '~/assets/javascript/animationSlider.js'
  import animationSVG from '~/assets/javascript/animationSVG.js'
  export default {
    components: {
      SvgSlider
    },
    mounted () {
      animationSlider()
      animationSVG()
    }
  }
</script>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
</style>