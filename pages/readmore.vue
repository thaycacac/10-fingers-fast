<template lang="pug">
  div.container.is-container-readmore
    h2.title.is-2.has-text-centered {{ $t('pageReadmore.title') }}
    p {{ $t('pageReadmore.intro') }}
    img(src="/img/typing/typing02.png" alt="introduction typing")
    h4.title.is-4.is-title-small {{ $t('pageReadmore.firstTitle') }}
    p {{ $t('pageReadmore.firstContent') }}
    img(src="/img/typing/typing01.png" alt="introduction typing")
    h4.title.is-4.is-title-small {{ $t('pageReadmore.secondTitle') }}
    p {{ $t('pageReadmore.secondContent') }}
    h4.title.is-4.is-title-small {{ $t('pageReadmore.thirdTitle') }}
    p {{ $t('pageReadmore.thirdContent') }}
    hr
    h5.title.is-5 {{ $t('pageReadmore.conclusion') }}
    button.button.is-warning
      nuxt-linkn(to="/") {{ $t('pageReadmore.comeback') }}
</template>
<script>
export default {
  head: {
    title: 'Giới thiệu | 10FingersFast',
    meta: [
      { name: 'title', content: 'Giới thiệu về trang luyện gõ bàm phím 10 ngón' },
      { hid: 'description', name: 'description', content: 'Trang luyện gõ bàn phím 10 ngón' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ]
  },
  transition: 'perfect',
  layout: 'typing'
}
</script>
<style lang="sass" scoped>
.is-container-readmore
  padding: 100px 0
  font-size: 1.5rem
  font-weight: 300
  .is-title-small
    margin-top: 30px
</style>
