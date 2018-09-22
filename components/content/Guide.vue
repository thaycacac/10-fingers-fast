<template>
  <div id="guide">
    <div class="is-container-guide">
        <h1 
          class="is-title"
          data-aos="zoom-in-up"
          data-aos-duration="500">Hướng Dẫn</h1>
        <p 
          class="is-description"
          data-aos="zoom-in-up"
          data-aos-duration="500">Phương pháp 10 ngón tay là một kỹ thuật được lập ra để sử dụng hiệu quả bàn phím máy tính của bạn. 
          Với một số bài thực hành và luyện cho bạn vị trí ngón tay chính xác, bạn không còn "gõ một cách mù 
          quáng" trên bàn phím. Sau đó, bạn có thể giảm đáng kể tỷ lệ lỗi và tăng tốc độ đánh một cách nhanh chóng.</p>
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage1
          :step=step.step1
          :image=image.image1></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon1
          :title=title.title1></content-guide>  
        </div>
      </div>
    </div>

    <div class="is-container-guide">
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage2
          :step=step.step2
          :image=image.image2></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon2
          :title=title.title2></content-guide>  
        </div>
      </div>
    </div>

    <div class="is-container-guide">
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage=numpage.numpage3
          :step=step.step3
          :image=image.image3></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :icon=icon.icon3
          :title=title.title3></content-guide>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentGuide from './guide/content'
import CoverGuide from './guide/cover'
export default {
  components: {
    ContentGuide,
    CoverGuide
  },
  data () {
    return {
      numpage: {
        numpage1: '01',
        numpage2: '02',
        numpage3: '03'
      },
      step: {
        step1: 'Đặt Tay',
        step2: 'Nhiệm Vụ',
        step3: 'Tư Thế'
      },
      icon: {
        icon1: 'fas fa-handshake',
        icon2: 'fas fa-sitemap',
        icon3: 'fas fa-wheelchair'
      },
      image: {
        image1: 'url(/img/keyboard/2.jpg)',
        image2: 'url(/img/keyboard/3.jpg)',
        image3: 'url(/img/keyboard/5.jpg)'
      },
      title: {
        title1: 'Quy tắc đặt tay trên bàn phím',
        title2: 'Phân công nhiệm vụ cho từng ngón tay',
        title3: 'Tư thế ngồi khi đánh máy'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
