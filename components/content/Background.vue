<template lang="pug">
  div.is-fixed-bg.is-fixed-bg-image.is-hidden-mobile
    div.container
      div.columns(data-aos="fade-right")
        div.column
          one-view(
            :icon='icon.icon1'
            :content='content.content1'
            :description='description.description1'
          )
        div.column
          one-view(
            :icon='icon.icon2'
            :content='content.content2'
            :description='description.description2'
          )
        div.column
          one-view(
            :icon='icon.icon3'
            :content='content.content3'
            :description='description.description3'
          )
        div.column
          one-view(
            :icon='icon.icon4'
            :content='content.content4'
            :description='description.description4'
          )
</template>

<script>
  import OneView from './background/view.vue'
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
      OneView
    }
  }
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
.is-fixed-bg
  position: relative
  height: 300px
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
  background-attachment: fixed
  z-index: 1
  h2
    position: absolute
    left: 50%
    top: 50%
    bottom: auto
    right: auto
    -webkit-transform: translateX(-50%) translateY(-50%)
    -ms-transform: translateX(-50%) translateY(-50%)
    transform: translateX(-50%) translateY(-50%)
    width: 90%
    max-width: 1170px
    margin: 0 auto
    text-align: center
    font-size: 3rem
.is-fixed-bg.is-fixed-bg-image
  background-image: url('/assets/img/background/background-fix02.jpg')
  margin-top: 40px

.is-one-component 
  color: white
  font-size: 45px
  text-align: center
  font-weight: 50
  i 
    margin-top: 35px
    color: $color-primary
  .is-number 
    font-size: 45px
    font-weight: 500
    font-family: $font-opensan
    margin-bottom: 15px
    color: $color-primary
  .is-description 
    font-size: 16px
    text-transform: uppercase
    letter-spacing: 2px
    color: #ababab
    font-family: $font-opensan
    font-weight: 500
</style>
