<template lang="pug">
  div
    div.is-guide
      i.is-icon(:class='icon')
      p.is-title-guide {{ title }}
      page01(v-if="title === title1Check")
      page02(v-if="title === title2Check")
      page03(v-if="title === title3Check")
</template>
<script>
import page01 from '../guide/01'
import page02 from '../guide/02'
import page03 from '../guide/03'
export default {
  data () {
    return {
      title1Check: this.$i18n.t('guide.title.title1'),
      title2Check: this.$i18n.t('guide.title.title2'),
      title3Check: this.$i18n.t('guide.title.title3')
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    page01: page01,
    page02: page02,
    page03: page03
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/main.sass'
</style>