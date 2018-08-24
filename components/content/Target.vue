<template>
    <div class="my-target">
        <div class="container-intro">
            <h1 class="title">What you can do?</h1>
            <h5 class="title  is-5 my-descrip">CREATIVE MULTIPURPOSE ONE/MULTI PAGE TEMPLATE</h5>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <one-view
                    :title = title1
                    :content = content1></one-view>
                </div>
                <div class="column">
                    <one-view
                    :title = title2
                    :content = content2></one-view>
                </div>
                <div class="column">
                    <one-view
                    :title = title3
                    :content = content3></one-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import oneView from './target/view.vue';
  export default {
    data () {
      return {
        title1 : 'Pixel Perfect',
        content1: 'Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimv',
        title2: 'Multiple icon sets',
        content2: 'Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimv',
        title3: 'Lots of features',
        content3: 'Lorem ipsum dolor sit amet, consectetur elit adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimv'
      }
    },
    components: {
      oneView
    }    
  };
    
</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.container-intro{
  @include setupTitle();
}
.my-target {
  padding-bottom: 80px;
  background-color: #f8f8f8;
}
</style>