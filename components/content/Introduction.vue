<template lang="pug">
  div.container-intro
    h1.title {{ $t('introduction.title') }}
    h5.title.is-5 {{ $t('introduction.titleSmall') }}
    p {{ $t('introduction.description') }}
</template>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
.container-intro{
  @include setupTitle();
  p{
  margin-top: 90px;
  }
}
</style>