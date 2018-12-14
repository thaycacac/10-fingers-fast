<template lang="pug">
  div.container-intro
    h2.title(data-aos="flip-right") {{ $t('introduction.title') }}
    h5.title.is-5(data-aos="flip-right") {{ $t('introduction.titleSmall') }}
    p(data-aos="fade-up") {{ $t('introduction.description') }}
</template>
<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
.container-intro
  @include setupTitle()
  p
  margin-top: 90px
</style>
