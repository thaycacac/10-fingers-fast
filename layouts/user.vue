<template lang="pug">
  div
    navbar
    nuxt
</template>

<script>
import Navbar from '../components/header/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.sass';
@include setupBackgroundNav();
</style>

