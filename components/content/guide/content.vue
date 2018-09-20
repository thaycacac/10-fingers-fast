<template>
    <div>
      <div class=" is-guide">
        <i 
          class="is-icon"
          :class=icon
          data-aos="fade-left"></i>
        <p 
        class="is-title-guide"
        data-aos="fade-left">{{ title }}</p>
        <p 
        class="is-content-guide" 
        v-html="content"
        data-aos="fade-left">
        <!-- FIXME: Error the client-side rendered virtual DOM -->
        </p>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/main.sass'
</style>