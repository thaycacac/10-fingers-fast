<template lang="pug">
  div
    navbar
    slider
    nuxt
    my-footer
</template>

<script>
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/SliderSmall'
import MyFooter from '../components/footer/Footer'

export default {
  components: {
    Navbar,
    Slider,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.sass';
@include setupBackgroundNav();
</style>