<template lang="pug">
  div.box
    p Lesson:
    input(type='text' v-model='lesson')
    p Type:
    input(type='text' v-model='type')
    p Content:
    input(type='text' v-model='content')
    input(type='submit' value='Submit' @click='ADMIN_CREATE_LESSON(lesson, type, content)')
</template>
<script>
import { ADMIN_CREATE_LESSON } from "~/axios/admin/adminController";
export default {
  data() {
    return {
      lesson: "",
      type: "",
      content: ""
    };
  },
  layout: "admin",
  middleware: "admin",
  methods: {
    ADMIN_CREATE_LESSON
  }
};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 30px;
}
</style>
