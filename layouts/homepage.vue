<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <nuxt/>
    <my-footer></my-footer>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
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
