<template lang="pug">
  div.container.is-hidden-mobile#typing-study
    h1.is-title-typing(data-aos="flip-right") {{ $t('typingStudy.titleBig') }}
    div.columns
      div.column.is-typing-left(data-aos="zoom-in-left")
        div.is-typing-content
          p.is-typing-title {{ $t('typingStudy.title.title1') }}
          p.is-typing-description {{ $t('typingStudy.description.description1') }}
        div.is-typing-icon
          i.fab.fa-first-order.is-icon
        div.is-typing-content
          p.is-typing-title {{ $t('typingStudy.title.title2') }}
          p.is-typing-description {{ $t('typingStudy.description.description2') }}
        div.is-typing-icon#is-first-icon
          i.fab.fa-linode.is-icon
      div.column.is-typing-center(data-aos="zoom-in-down")
      div.column.is-typing-right(data-aos="zoom-in-right")
        div.is-typing-content
          p.is-typing-title {{ $t('typingStudy.title.title3') }}
          p.is-typing-description {{ $t('typingStudy.description.description3') }}
        div.is-typing-icon
          i.fas.fa-eye.is-icon
        div.is-typing-content
          p.is-typing-title {{ $t('typingStudy.title.title4') }}
          p.is-typing-description {{ $t('typingStudy.description.description4') }}
        div.is-typing-icon
          i.fab.fa-codepen.is-icon
    div
      button.is-begin 
        a(href="/learn") Bắt Đầu
</template>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
.container {
  margin-bottom: 200px;
}
</style>
