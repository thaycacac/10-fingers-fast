<template lang="pug">
  div
    div.columns
      div.column.is-image(:style='{backgroundImage: image}')
        div.is-mask
        div.is-intro
          p.is-number-page {{ numpage }}
          p.is-text-intro {{ step }}
</template>

<script>
export default {
  props: {
    numpage: {
      type: String,
      required: true
    },
    step: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/sass/main.sass';
  .column.is-image {
    margin-top: 12px;
  }
</style>