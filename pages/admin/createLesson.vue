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
  methods: {
    createLesson() {
      this.$axios.post('/api/lesson/createLesson', {
        lesson: this.lesson,
        type: this.type,
        content: this.content
      })
      .then(() => {
        this.lesson = '',
        this.type = '',
        this.content =''
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 30px;
}
</style>
