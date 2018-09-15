<template>
    <div class="my-target">
        <div class="container-intro">
            <h1 class="title">Bạn có thể làm gì?</h1>
            <h5 class="title  is-5 my-descrip">Đến với 10FingersFast, chúng tôi có thể giúp bạn</h5>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <one-view
                    :icon=icon.icon1
                    :title = title.title1
                    :content = content.content1></one-view>
                </div>
                <div class="column">
                    <one-view
                    :icon=icon.icon2
                    :title = title.title2
                    :content = content.content2></one-view>
                </div>
                <div class="column">
                    <one-view
                    :icon=icon.icon3
                    :title = title.title3
                    :content = content.content3></one-view>
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
        title: {
          title1 : 'Học',
          title2: 'Hành',
          title3: 'Chơi',
        },
        content: {
          content1: 'Tìm hiểu các khái niệm cơ bản của phương pháp 10 ngón tay chỉ trong vài phút - để có cái nhìn thoáng qua đầu tiên hoặc để bắt đầu thực hành đánh máy ngay lập tức.',
          content2: 'Thực hành các bài luyện gõ chữ 10 ngón từ cơ bản đến nâng cao giúp bạn có thể hình thành thói quen gõ 10 ngón một cách chính xác và điêu luyện. ',
          content3: 'Các trò chơi và các bài test giúp bạn hứng thú hơn trong quá trình học và kiểm tra trình độ của bạn, sự tiến bộ của bạn đến đâu...'
        },
        icon: {
           icon1: 'fas fa-bookmark',
           icon2: 'fas fa-graduation-cap',
           icon3: 'fas fa-layer-group'
        }
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
  padding-bottom: 120px;
  background-color: #f8f8f8;
}
</style>