<template lang="pug">
  div.is-navigation-map.is-hidden-mobile
    div.container.is-container-navigation(data-aos="fade-right")
      p.has-text
        a.text-yellow(href='/#target') {{ $t('navigation.target') }}
      p /
      p.has-text
        a.text-yellow(href='/#guide') {{ $t('navigation.guide') }}
      p /
      p.has-text
        a.text-yellow(href='/#typing-study') {{ $t('navigation.typingStudy') }}
      p /
      p.has-text
        a.text-yellow(href='/#typing-study') {{ $t('navigation.testSpeed') }}
</template>
<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
</style>
