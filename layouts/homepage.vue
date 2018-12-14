<template lang="pug">
  div
    navbar
    slider
    nuxt
    my-footer
</template>

<script>
import Navbar from '~/components/navbar'
import Slider from '~/components/slider'
import MyFooter from '~/components/footer'

export default {
  components: {
    Navbar,
    Slider,
    MyFooter
  }
}
</script>
