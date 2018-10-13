const USER_SIGNUP = function (username, firstname, lastname, dob, email, password, repassword) {
  this.$store.dispatch('SET_ERROR', '')
  const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  window.scrollTo(0, top)
  if (!username.trim() || username === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input username')
  } else if (!firstname.trim() || firstname === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input firstname')
  } else if (!lastname.trim() || lastname === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input lastname')
  } else if (!dob.trim() || dob === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input date of birth')
  } else if (!email.trim() || email === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input email')
  } else if (!password.trim() || password === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input password')
  } else if (!repassword.trim() || repassword === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input repassword')
  } else if (!regexEmail.test(email)) {
    this.$store.dispatch('SET_ERROR', '· Incorrect email format')
  } else if (password.length < 8) {
    this.$store.dispatch('SET_ERROR', '· Password should contain at least 8 from the mentioned characters')
  } else if (!(password === repassword)) {
    this.$store.dispatch('SET_ERROR', '· Password and Repassword not the same')
  } else {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$axios.post(`/api/user/signup`, {
      username: username,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      email: email,
      password: password
    })
      .then(response => {
        this.$router.go(-1)
        this.$nuxt.$loading.finish()
      })
      .catch(function (error) {
        console.log(error)
      })
  }
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
  this.$axios.post(`/api/user/signin`, {
    username: username,
    password: password
  })
    .then(response => {
      // done loading page
      this.$nuxt.$loading.finish()
      if (response.data.error) {
        this.$store.dispatch('SET_ERROR', response.data.error)
      } else {
        this.$store.dispatch('SET_ERROR', '')
        if (username === 'admin') {
          this.$router.go(0)
        } else {
          this.$router.go(0)
        }
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

const USER_PROFILE = (context) => {
  context.$nextTick(() => {
    context.$nuxt.$loading.start()
  })
  // get information user by session username
  context.$axios.post(`/api/user/getProfile`, {username: context.$store.getters.GET_ACCOUNT})
    .then(result => {
      const userCurrent = result.data
      context.$store.dispatch('SET_USER', {
        username: userCurrent.username,
        firstname: userCurrent.firstname,
        lastname: userCurrent.lastname,
        dob: userCurrent.dob.toString().split('T')[0],
        email: userCurrent.email,
        password: userCurrent.password
      })
      context.$nuxt.$loading.finish()
    })
}

const USER_UPDATE = function (username, firstname, lastname, dob, email, password, repassword) {
  this.$store.dispatch('SET_ERROR', '')
  const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  window.scrollTo(0, top)
  if (!username.trim() || username === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input username')
  } else if (!firstname.trim() || firstname === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input firstname')
  } else if (!lastname.trim() || lastname === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input lastname')
  } else if (!dob.trim() || dob === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input date of birth')
  } else if (!email.trim() || email === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input email')
  } else if (!password.trim() || password === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input password')
  } else if (!repassword.trim() || repassword === undefined) {
    this.$store.dispatch('SET_ERROR', '· You must be input repassword')
  } else if (!regexEmail.test(email)) {
    this.$store.dispatch('SET_ERROR', '· Incorrect email format')
  } else if (password.length < 8) {
    this.$store.dispatch('SET_ERROR', '· Password should contain at least 8 from the mentioned characters')
  } else if (!(password === repassword)) {
    this.$store.dispatch('SET_ERROR', '· Password and Repassword not the same')
  } else {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$axios.post(`/api/user/update`, {
      username: username,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      email: email,
      password: password
    })
      .then(response => {
        this.$router.go(-1)
        this.$nuxt.$loading.finish()
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

const USER_LOGOUT = function () {
  // show loading page
  this.$nextTick(() => {
    this.$nuxt.$loading.start()
  })
  this.$axios.post(`/api/user/logout`)
    .then(() => {
      // FIXME: push error
      this.$router.go(0)
      this.$nuxt.$loading.finish()
    })
}

export {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_PROFILE,
  USER_UPDATE,
  USER_LOGOUT
}
