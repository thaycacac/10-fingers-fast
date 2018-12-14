<template lang="pug">
  div.is-navigation-map.is-hidden-mobile
    div.container.is-container-navigation(data-aos="fade-right")
      p.has-text
        a.has-text-grey-dark(href='/#target') {{ $t('navigation.target') }}
      p /
      p.has-text
        a.has-text-grey-dark(href='/#guide') {{ $t('navigation.guide') }}
      p /
      p.has-text
        a.has-text-grey-dark(href='/#typing-study') {{ $t('navigation.typingStudy') }}
      p /
      p.has-text
        a.has-text-grey-dark(href='/#typing-study') {{ $t('navigation.testSpeed') }}
</template>
<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
</style>