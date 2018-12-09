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
  transition: 'perfect',
  layout: 'typing' 
}
</script>