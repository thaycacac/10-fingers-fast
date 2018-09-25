<template lang="pug">
  div.box
    p Lesson:
    input(type='text' v-model='lesson')
    p Type:
    input(type='text' v-model='type') 
    p Content:
    input(type='text' v-model='content')
    input(type='submit' value='Submit' @click='createLesson')
</template>
<script>
export default {
  data () {
    return {
      lesson: '',
      type: '',
      content: ''
    }
  },
  layout: 'admin',
  middleware: 'authentication',
  methods: {
    createLesson () {
      this.$axios.post('/api/lesson', {
        lesson: this.lesson,
        type: this.type,
        content: this.content
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
