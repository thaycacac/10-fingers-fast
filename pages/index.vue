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
  },
  head: {
    title: 'Trang chủ',
    meta: [
      { hid: 'description', name: 'description', content: 'Trang luyện gõ bàn phím 10 ngón' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  }
}
</script>

<style scoped>
</style>