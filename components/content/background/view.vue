<template>
    <div class="is-one-component">
       <i :class="icon"></i>
       <p class="is-number">{{ content }}</p>
       <p class="is-description">{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    content: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/main.sass";
</style>
