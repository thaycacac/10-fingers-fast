<template>
  <div class="box">  
    <p>Lesson ID: </p>
    <input type="text" v-model="lessonID">
    <p>Lesson Title</p>
    <input type="text" v-model="lessonTitle">
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