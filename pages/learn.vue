<template>
  <div>
    <navbar/>
    <slider/>
    <learn/>
    <my-footer/>
  </div>
</template>
<script>
import Learn from '../components/content/Learn'
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/SliderSmall'
import MyFooter from '../components/footer/Footer'
export default {
  components: {
    Navbar,
    Slider,
    Learn,
    MyFooter,
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/main.sass';
@include setupBackgroundNav();
</style>
