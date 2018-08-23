<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <introduction></introduction>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import Navbar from "../components/header/Navbar";
import Slider from "../components/header/Slider";
import Introduction from '../components/content/Introduction';

export default {
  components: {
    Navbar,
    Slider,
    Introduction
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