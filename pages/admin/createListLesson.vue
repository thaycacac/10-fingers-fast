<template lang="pug">
  div.box
    p Lesson ID:
    input(type='text' v-model='lessonID')
    p Lesson Title
    input(type='text' v-model='lessonTitle')
    p Lesson Description
    input(type='text' v-model='lessonDescription')
    input(type='submit' value='Submit' @click='ADMIN_CREATE_LIST_LESSON(lessonID, lessonTitle, lessonDescription)')
</template>
<script>
import { ADMIN_CREATE_LIST_LESSON } from '~/axios/admin/adminController'
export default {
  data () {
    return {
      lessonID: '',
      lessonTitle: '',
      lessonDescription: ''
    }
  },
  layout: 'admin',
  methods: {
    ADMIN_CREATE_LIST_LESSON
  },
  middleware: 'admin'
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 30px;
}
</style>
