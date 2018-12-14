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
    title: 'Trang chủ | 10FingersFast | Trang luyện gõ 10 ngón',
    meta: [
      { name: 'title', content: '10FingersFast - Trang chủ luyện gõ bàn phím' },
      {
        hid: 'description',
        name: 'description',
        content: '10FingersFast là một trang web học tập miễn phí và rất dễ sử dụng, được thiết kế để giúp bạn học, luyện tập và cải thiện tốc độ và độ chính xác khi gõ bàn phím máy tính. Khi đã có thể gõ 10 ngón, bạn sẽ không cần phải nhìn vào bàn phím để tìm chữ cái muốn gõ và bạn có thể gõ với tốc độ nhanh hơn rất nhiều.'
      },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  }
}
</script>
