<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <introduction></introduction>
    <navigation></navigation>
    <target></target>
    <background></background>
    <target></target>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import Navbar from "../components/header/Navbar";
import Slider from "../components/header/Slider";
import Introduction from '../components/content/Introduction';
import Navigation from '../components/content/Navigation';
import Target from '../components/content/Target';
import Background from '../components/content/Background';

export default {
  components: {
    Navbar,
    Slider,
    Introduction,
    Navigation,
    Target,
    Background
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