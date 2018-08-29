<template>
    <div class="is-guide">
        <content-right></content-right>
   </div>
</template>
<script>
import ContentRight from './guide/right';
export default {
  components: {
    ContentRight
  }
};
</script>
<style lang="scss" scoped>
.is-guide {
    margin: 85px 0px;
}
</style>
