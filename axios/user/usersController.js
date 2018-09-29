import axios from 'axios'

const signup = (username, firstname, lastname, dob, email, password) => {
  axios.post('/api/user/signup', {
    username: username,
    firstname: firstname,
    lastname: lastname,
    dob: dob,
    email: email,
    password: password
  })
    .then(function (response) {
      console.log(response.data.error)
      console.log(response.data.message)
    })
    .catch(function (error) {
      console.log(error)
    })
}

const USER_SIGNIN = function (username, password) {
  // check input
  if (username.trim() === '' || password.trim() === '') {
    this.$store.dispatch('SET_ERROR', 'Must be input all field')
    return
  }
  // show loading page
  this.$nextTick(() => {
    this.$nuxt.$loading.start()
  })
  // get api
  this.$axios.post('/api/user/signin', {
    username: username,
    password: password
  })
    .then(response => {
      // done loading page
      this.$nuxt.$loading.finish()
      if (response.data.error) {
        this.$store.dispatch('SET_ERROR', response.data.error)
      } else {
        this.$store.dispatch('SET_USER', response.data.message)
        this.$store.dispatch('SET_ERROR', '')
        // set session
        this.$session.start()
        this.$session.set('username', username)
        if (username === 'admin') {
          this.$router.push('/admin')
        } else {
          this.$router.go(-1)
        }
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export {
  signup,
  USER_SIGNIN
}
