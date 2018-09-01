<template>
  <div>
    <div class="is-container-guide">
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
        <div class="column is-8">
          <content-guide
          :title="title.title2"
          :content="content.content2"></content-guide>
        </div>
        <div class="column">
          <cover-guide
          :numpage="numpage.numpage2"
          :step="step.step2"></cover-guide>
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
.is-container-guide {
    margin: 30px 0px;
}
</style>
