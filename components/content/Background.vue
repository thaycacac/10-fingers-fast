<template>
    <div class="is-fixed-bg is-fixed-bg-image is-hidden-mobile">
      <div class="container">
        <div class="columns">
          <div class="column">
            <one-view
            :icon="icon.icon1"
            :content="content.content1"
            :description="description.description1"></one-view>
          </div>
          <div class="column">
            <one-view
            :icon="icon.icon2"
            :content="content.content2"
            :description="description.description2"></one-view>
          </div>
          <div class="column">
            <one-view
            :icon="icon.icon3"
            :content="content.content3"
            :description="description.description3"></one-view>
          </div>
          <div class="column">
            <one-view
            :icon="icon.icon4"
            :content="content.content4"
            :description="description.description4"></one-view>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
  import OneView from './background/view.vue';
  export default {
    data () {
      return {
        icon: {
          icon1: 'fab fa-connectdevelop',
          icon2: 'fas fa-headphones-alt',
          icon3: 'far fa-check-circle',
          icon4: 'fab fa-medapps'
        },
        content: {
          content1: 516,
          content2: 478,
          content3: 652,
          content4: 458
        },
        description: {
          description1: 'Bài luyện tập',
          description2: 'Người dùng',
          description3: 'Hoàn thành',
          description4: 'Bài kiểm tra'
        }
      }
    },
    components: {
      OneView
    }
  };
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
