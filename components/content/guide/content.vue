<template>
    <div>
      <div class=" is-guide">
        <i class="fab fa-vuejs is-icon"></i>
        <p class="is-title-guide">{{ title }}</p>
        <p class="is-content-guide">
          {{ content }}
        </p>
        <a href="#">
          <button class="is-button">Read More</button>
        </a>
      </div>
    </div>
</template>
<script>
export default {
  props: {
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