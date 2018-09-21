<template>
  <div>  
    <p data-aos="fade-up">Lesson: </p>
    <input type="text" v-model="lesson">
    <p data-aos="fade-up">Type: </p>
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
  methods: {
    createLesson() {
      this.$axios.post('/api/lesson', {
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