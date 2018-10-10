<template lang="pug">
  div#guide
    div.is-container-guide
      h1.is-title {{ $t('guide.titleBig') }}
      p.is-description {{ $t('guide.titleSmall') }}
      div.columns
        div.column.is-4
          cover-guide(
            :numpage='numpage.numpage1'
            :step='step.step1'
            :image='image.image1'
          )
        div.column
          content-guide(
            :icon='icon.icon1'
            :title='title.title1'
          )
    div.is-container-guide
      div.columns
        div.column.is-4
          cover-guide(
            :numpage='numpage.numpage2'
            :step='step.step2'
            :image='image.image2'
          )
        div.column
          content-guide(
            :icon='icon.icon3'
            :title='title.title2'
          )
    div.is-container-guide
      div.columns
        div.column.is-4
          cover-guide(
            :numpage='numpage.numpage3'
            :step='step.step3'
            :image='image.image3'
          )
        div.column
          content-guide(
            :icon='icon.icon1'
            :title='title.title3'
          )
</template>

<script>
import ContentGuide from './guide/content'
import CoverGuide from './guide/cover'
export default {
  components: {
    ContentGuide,
    CoverGuide
  },
  data () {
    return {
      numpage: {
        numpage1: '01',
        numpage2: '02',
        numpage3: '03'
      },
      step: {
        step1: this.$i18n.t('guide.step.step1'),
        step2: this.$i18n.t('guide.step.step2'),
        step3: this.$i18n.t('guide.step.step3'),
      },
      icon: {
        icon1: 'fas fa-handshake',
        icon2: 'fas fa-sitemap',
        icon3: 'fas fa-wheelchair'
      },
      image: {
        image1: 'url(/img/keyboard/2.jpg)',
        image2: 'url(/img/keyboard/3.jpg)',
        image3: 'url(/img/keyboard/5.jpg)'
      },
      title: {
        title1: this.$i18n.t('guide.title.title1'),
        title2: this.$i18n.t('guide.title.title2'),
        title3: this.$i18n.t('guide.title.title3'),
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
</style>
