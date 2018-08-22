<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <part1></part1>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import Navbar from "../components/header/Navbar";
import Slider from "../components/header/Slider";
import Part1 from '../components/content/part1';

export default {
  components: {
    Navbar,
    Slider,
    Part1
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