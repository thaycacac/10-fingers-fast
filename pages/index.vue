<template>
  <div>
    <introduction></introduction>
    <navigation></navigation>
    <target></target>
    <guide></guide>
    <background></background>
    <typing-study></typing-study>
    <follow></follow>
  </div>
</template>

<script>
import Introduction from '../components/content/Introduction'
import Navigation from '../components/content/Navigation'
import Target from '../components/content/Target'
import Background from '../components/content/Background'
import Guide from '../components/content/Guide'
import Follow from '../components/content/Follow'
import TypingStudy from '../components/content/TypingStudy'

export default {
  layout: 'homepage',
  components: {
    Introduction,
    Navigation,
    Target,
    Background,
    Guide,
    Follow,
    TypingStudy,
  }
}
</script>

<style scoped>
</style>