<template lang="pug">
  div
    navbar
    slider
    nuxt
    my-footer
</template>

<script>
import Navbar from '~/components/navbar'
import Slider from '~/components/slider-small'
import MyFooter from '~/components/footer'

export default {
  components: {
    Navbar,
    Slider,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
@include setupBackgroundNav();
</style>
