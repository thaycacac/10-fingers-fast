<template>
  <div>
    <navbar></navbar>
    <slider></slider>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import Navbar from "../components/header/Navbar";
import Slider from "../components/header/Slider";

export default {
  components: {
    Navbar,
    Slider
  }
  // async asyncData () {
  //   let { data } = await axios.get('/api/users')
  //   return { users: data }
  // },
  // head () {
  //   return {
  //     title: 'Users'
  //   }
  // }
};
</script>

<style scoped>
</style>