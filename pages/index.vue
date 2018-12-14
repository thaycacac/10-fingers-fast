<template lang="pug">
  div
    introduction
    navigation
    target
    guide
    background
    typing-study
    follow
</template>

<script>
import Introduction from '~/components/introduction'
import Navigation from '~/components/navigation'
import Target from '~/components/target'
import Background from '~/components/background'
import Guide from '~/components/guide'
import Follow from '~/components/follow'
import TypingStudy from '~/components/typing-study'

export default {
  layout: 'homepage',
  components: {
    Introduction,
    Navigation,
    Target,
    Background,
    Guide,
    Follow,
    TypingStudy
  },
  transition: 'perfect',
  head: {
    title: 'Home Page',
    meta: [
      { hid: 'description', name: 'description', content: 'Trang luyện gõ bàn phím 10 ngón' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  }
}
</script>
