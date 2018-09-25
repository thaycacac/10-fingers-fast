<template lang="pug">
  div.box
    p Lesson ID: 
    input(type='text' v-model='lessonID')
    p Lesson Title
    input(type='text' v-model='lessonTitle')
    p Lesson Description
    input(type='text' v-model='lessonDescription')
    input(type='submit' value='Submit' @click='createListLesson')
</template>
<script>
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
    createListLesson () {
      this.$axios.post('/api/listLesson', {
        lessonID: this.lessonID,
        lessonTitle: this.lessonTitle,
        lessonDescription: this.lessonDescription
      })
        .then(() => {
          console.log('create success')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  beforeMount() {
    if (this.$session.get('username') !== 'admin') {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 30px;
}
</style>