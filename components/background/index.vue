<template lang="pug">
  div.is-fixed-bg.is-fixed-bg-image.is-hidden-mobile
    div.container
      div.columns(data-aos="fade-right")
        div.column
          one-card(
            :icon='icon.icon1'
            :content='content.content1'
            :description='description.description1'
          )
        div.column
          one-card(
            :icon='icon.icon2'
            :content='content.content2'
            :description='description.description2'
          )
        div.column
          one-card(
            :icon='icon.icon3'
            :content='content.content3'
            :description='description.description3'
          )
        div.column
          one-card(
            :icon='icon.icon4'
            :content='content.content4'
            :description='description.description4'
          )
</template>

<script>
  import OneCard from './card'
  export default {
    data () {
      return {
        icon: {
          icon1: 'fab fa-connectdevelop',
          icon2: 'fas fa-headphones-alt',
          icon3: 'far fa-check-circle',
          icon4: 'fab fa-medapps'
        },
        content: {
          content1: 516,
          content2: 478,
          content3: 652,
          content4: 458
        },
        description: {
          description1: this.$i18n.t('background.one'),
          description2: this.$i18n.t('background.two'),
          description3: this.$i18n.t('background.three'),
          description4: this.$i18n.t('background.four')
        }
      }
    },
    components: {
      OneCard
    }
  }
</script>

<style lang="sass" swcoped>
@import '~/assets/sass/main.sass';
</style>
