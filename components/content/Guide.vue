<template>
  <div>
    <div class="is-container-guide">
        <h1 class="is-title">Các Nguyên Tắc</h1>
        <p class="is-description">Phương pháp 10 ngón tay là một kỹ thuật được lập ra để sử dụng hiệu quả bàn phím máy tính của bạn. 
          Với một số bài thực hành và luyện cho bạn vị trí ngón tay chính xác, bạn không còn "gõ một cách mù 
          quáng" trên bàn phím. Sau đó, bạn có thể giảm đáng kể tỷ lệ lỗi và tăng tốc độ đánh một cách nhanh chóng.</p>
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage="numpage.numpage1"
          :step="step.step1"></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :title="title.title1"
          :content="content.content1"></content-guide>  
        </div>
      </div>
    </div>

    <div class="is-container-guide">
      <div class="columns">
        <div class="column is-4">
          <cover-guide
          :numpage="numpage.numpage2"
          :step="step.step2"></cover-guide>
        </div>
        <div class="column">
          <content-guide
          :title="title.title2"
          :content="content.content2"></content-guide>  
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
        numpage2: '02'
      },
      step: {
        step1: 'branding',
        step2: 'key person'
      },
      title: {
        title1: 'INTELLIGENCE IS NOTHING WITHOUT AMBITION.',
        title2: 'We are a multi-discipline design studio with an extensive '
      },
      content: {
        content1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        content2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
