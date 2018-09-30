const ADMIN_CREATE_LESSON = function (lesson, type, content) {
  this.$axios.post(`/api/lesson`, {
    lesson: lesson,
    type: type,
    content: content
  })
    .then(() => {
      console.log('create success')
    })
    .catch(err => {
      console.log(err)
    })
}

const ADMIN_CREATE_LIST_LESSON = function (lessonID, lessonTitle, lessonDescription) {
  this.$axios.post('/api/listLesson', {
    lessonID: lessonID,
    lessonTitle: lessonTitle,
    lessonDescription: lessonDescription
  })
    .then(() => {
      console.log('create success')
    })
    .catch(err => {
      console.log(err)
    })
}

export {
  ADMIN_CREATE_LESSON,
  ADMIN_CREATE_LIST_LESSON
}
