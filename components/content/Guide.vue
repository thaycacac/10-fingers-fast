<template lang="pug">
  div#guide
    div.is-container-guide
      h1.is-title(data-aos="flip-right") {{ $t('guide.titleBig') }}
      p.is-description(data-aos="flip-down") {{ $t('guide.titleSmall') }}
      Guide01
      Guide02
      Guide03
</template>

<script>
import Guide01 from './guide/Guide01'
import Guide02 from './guide/Guide02'
import Guide03 from './guide/Guide03'
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
