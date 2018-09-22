<template>
  <div class="box">  
    <p>Lesson: </p>
    <input type="text" v-model="lesson">
    <p>Type: </p>
    <input type="text" v-model="type">
    <p>Content</p>
    <input type="text" v-model="content">
    <input type="button" value="Submit" @click="createLesson">
  </div>
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
