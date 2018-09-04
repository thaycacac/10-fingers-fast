<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <introduction></introduction>
    <navigation></navigation>
    <target></target>
    <guide></guide>
    <background></background>
    <typing-study></typing-study>
    <follow></follow>
    <my-footer></my-footer>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import Navbar from "../components/header/Navbar"
import Slider from "../components/header/Slider"
import Introduction from '../components/content/Introduction'
import Navigation from '../components/content/Navigation'
import Target from '../components/content/Target'
import Background from '../components/content/Background'
import Guide from '../components/content/Guide'
import Follow from '../components/content/Follow'
import TypingStudy from '../components/content/TypingStudy'
import MyFooter from '../components/footer/Footer';

export default {
  components: {
    Navbar,
    Slider,
    Introduction,
    Navigation,
    Target,
    Background,
    Guide,
    Follow,
    TypingStudy,
    MyFooter
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