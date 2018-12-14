<template lang="pug">
  div.my-target#target
    div.container-intro
      h1.title(data-aos="flip-right") {{ $t('target.titleBig') }}
      h5.title.is-5.my-descrip(data-aos="flip-right") {{ $t('target.titleSmall') }}
    div.container
      div.columns.is-all
        div.column.is-one
          one-card(
            :icon='icon.icon1'
            :title='title.title1'
            :content='content.content1'
            data-aos="fade-right"
          )
        div.column.is-one
          one-card(
            :icon='icon.icon2'
            :title='title.title2'
            :content='content.content2'
            data-aos="fade-up"
          )
        div.column.is-one
          one-card(
            :icon='icon.icon3'
            :title='title.title3'
            :content='content.content3'
            data-aos="fade-left"
          )
</template>
<script>
  import OneCard from './card'
  export default {
    data () {
      return {
        title: {
          title1: this.$i18n.t('target.title.title1'),
          title2: this.$i18n.t('target.title.title2'),
          title3: this.$i18n.t('target.title.title3'),
        },
        content: {
          content1: this.$i18n.t('target.content.content1'),
          content2: this.$i18n.t('target.content.content2'),
          content3: this.$i18n.t('target.content.content3'),
        },
        icon: {
          icon1: 'fas fa-bookmark',
          icon2: 'fas fa-graduation-cap',
          icon3: 'fas fa-layer-group'
        }
      }
    },
    components: {
      OneCard
    }
  }
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass'
.container-intro
  @include setupTitle()
.my-target
  padding-bottom: 120px
  background-color: #f8f8f8
</style>
