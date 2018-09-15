<template>
    <div>
        <div class="columns">
            <div class="column is-image" :style="{backgroundImage: image}">
                <div class="is-mask">
                </div>
                <div class="is-intro">
                    <p class="is-number-page">{{ numpage }}</p>
                    <p class="is-text-intro">{{ step }}</p>
                </div>
            </div>
        </div>
    </div>
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