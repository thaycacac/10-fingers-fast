<template>
    <div class="is-target">
      <i :class="icon"></i>
      <h5 class="title">{{ title }}</h5>
      <p>{{ content }}</p>
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
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/main.sass';

</style>

