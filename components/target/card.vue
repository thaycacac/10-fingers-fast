<template lang="pug">
  div.is-target
    i(:class='icon')
    h5.title {{ title }}
    p {{ content }}
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
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
</style>

