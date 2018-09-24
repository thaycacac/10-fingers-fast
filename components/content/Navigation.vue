<template lang="pug">
  div.is-navigation-map.is-hidden-mobile
    div.container.is-container-navigation
      p.has-text
        a(href='/#target') {{ $t('navigation.target') }}
      p /
      p.has-text
        a(href='/#guide') {{ $t('navigation.guide') }}
      p /
      p.has-text
        a(href='/#typing-study') {{ $t('navigation.typingStudy') }}
      p /
      p.has-text
        a(href='/#typing-study') {{ $t('navigation.testSpeed') }}
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>

