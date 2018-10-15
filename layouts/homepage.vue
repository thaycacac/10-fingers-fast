<template lang="pug">
  div
    navbar
    slider
    nuxt
    my-footer
</template>

<script>
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/Slider'
import MyFooter from '../components/footer/Footer'

export default {
  components: {
    Navbar,
    Slider,
    MyFooter
  }
}
</script>
