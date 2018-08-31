<template>
    <div class="is-container-guide">
      <div class="columns">
        <div class="column">
          <cover-guide></cover-guide>
        </div>
        <div class="column">
          <content-guide></content-guide>  
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
  }
};
</script>
<style lang="scss" scoped>
.is-container-guide {
    margin: 85px 0px;
}
</style>
