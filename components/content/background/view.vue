<template lang="pug">
  div.is-one-component
    i(:class='icon')
      p.is-number {{ content }}
      p.is-description {{ description }}
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
@import "~/assets/sass/main.sass";
</style>
