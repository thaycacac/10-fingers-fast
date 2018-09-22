<template>
    <div>
      <div class=" is-guide">
        <i 
          class="is-icon"
          :class=icon
          data-aos="fade-left"></i>
        <p 
        class="is-title-guide">{{ title }}</p>
        <page01 v-if="title === 'Quy tắc đặt tay trên bàn phím'"/>
        <page02 v-if="title === 'Phân công nhiệm vụ cho từng ngón tay'"/>
        <page03 v-if="title === 'Tư thế ngồi khi đánh máy'"/>
      </div>
    </div>
</template>
<script>
import page01 from '../guide/01'
import page02 from '../guide/02'
import page03 from '../guide/03'
export default {
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
  @import '../../../assets/sass/main.sass'
</style>