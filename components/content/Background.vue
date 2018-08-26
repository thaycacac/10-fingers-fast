<template>
    <div class="is-fixed-bg is-fixed-bg-image">
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
          icon1: 'fas fa-heart',
          icon2: 'fas fa-smile',
          icon3: 'fas fa-anchor',
          icon4: 'fas fa-comments'
        },
        content: {
          content1: 516,
          content2: 478,
          content3: 652,
          content4: 458
        },
        description: {
          description1: 'pizzas Ordered',
          description2: 'happy clients',
          description3: 'projects completed',
          description4: 'comments reserved'
        }
      }
    },
    components: {
      OneView
    }
  };
  
</script>

<style lang="scss" scoped>
.is-fixed-bg {
  position: relative;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  z-index: 1;
  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
  }
}
.is-fixed-bg.is-fixed-bg-image {
  background-image: url(https://i.imgur.com/ZG50ZEA.jpg);
}
</style>
