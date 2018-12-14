<template lang="pug">
  div#guide
    div.is-container-guide
      h2.is-title(data-aos="flip-right") {{ $t('guide.titleBig') }}
      p.is-description(data-aos="flip-down") {{ $t('guide.titleSmall') }}
      Guide01
      Guide02
      Guide03
</template>

<script>
import Guide01 from './guide-01'
import Guide02 from './guide-02'
import Guide03 from './guide-03'
export default {
  components: {
    Guide01,
    Guide02,
    Guide03
  }
}
</script>
<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
</style>
