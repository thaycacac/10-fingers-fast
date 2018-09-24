<template lang="pug">
  div.container-intro
    h1.title(data-aos='zoom-in-up') {{ $t('introduction.title') }}
    h5.title.is-5(data-aos='zoom-in-up') {{ $t('introduction.titleSmall') }}
    p(data-aos='flip-right') {{ $t('introduction.description') }}
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.container-intro{
  @include setupTitle();
  p{
  margin-top: 90px;
  }
}
</style>