<template>
  <div>  
    <p>Lesson ID: </p>
    <input type="text" v-model="lessonID">
    <p>Lesson Description</p>
    <input type="text" v-model="lessonDescription">
    <input type="button" value="Submit" @click="createListLesson">
  </div>
</template>
<script>
export default {
  data () {
    return {
      lessonID: '',
      lessonDescription: ''
    }
  },
  methods: {
    createListLesson() {
      this.$axios.post('/api/listLesson/createListLesson', {
        lessonID: this.lessonID,
        lessonDescription: this.lessonDescription
      })
      .then(() => {
        this.lessonID = '',
        this.lessonDescription = ''
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>