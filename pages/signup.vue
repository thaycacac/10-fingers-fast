<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-8.is-offset-2
          h3.title.has-text-black {{ $t('signup.title') }}
          div.box
            p(
              class='has-error'
              v-show='!hasError'
              v-html='error'
            )
            form
              div.field
                label.label {{ $t('signup.title') }}
                div.control
                  input.input.is-large(type='text' placeholder='Input username' v-model='username')
              div.field
                label.label {{ $t('signup.firstname') }}
                div.control
                  input.input.is-large(type='text' placeholder='Input first name' v-model='firstname')
              div.field
                label.label {{ $t('signup.lastname') }}
                div.control
                  input.input.is-large(type='text' placeholder='Input last name' v-model='lastname')
              div.field
                label.label {{ $t('signup.dob') }}
                div.control
                  input.input.is-large(type='date' v-model='dob')
              div.field
                label.label {{ $t('signup.email') }}
                div.control
                  input.input.is-large(type='email' placeholder='Input email' v-model='email')
              div.field
                label.label {{ $t('signup.password') }}
                div.control
                  input.input.is-large(type='password' placeholder='Input password' v-model='password')
              div.field
                label.label {{ $t('signup.repassword') }}
                div.control
                  input.input.is-large(type='password' placeholder='Input repassword' v-model='repassword')
              button.button.is-block.is-warning.is-large.is-fullheight(
                @click.prevent='signup'
              ) {{ $t('signup.title') }}
          p.has-choose-more
            a(href='/signin') {{ $t('signup.signin') }}
</template>

<script>
import { signup } from '~/axios/user/usersController'
export default {
  data () {
    return {
      username: '',
      firstname: '',
      lastname: '',
      dob: new Date(),
      email: '',
      password: '',
      repassword: '',
      error: ''
    }
  },
  layout: 'user',
  methods: {
    signup () {
      this.error = ''
      const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      window.scrollTo(0, top)
      if (!this.username.trim() || this.username === undefined) {
        this.error = '· You must be input username<br>'
      } else if (!this.firstname.trim() || this.firstname === undefined) {
        this.error = '· You must be input firstname<br>'
      } else if (!this.lastname.trim() || this.lastname === undefined) {
        this.error = '· You must be input lastname<br>'
      } else if (!this.dob.trim() || this.dob === undefined) {
        this.error = '· You must be input date of birth<br>'
      } else if (!this.email.trim() || this.email === undefined) {
        this.error = '· You must be input email<br>'
      } else if (!this.password.trim() || this.password === undefined) {
        this.error = '· You must be input password<br>'
      } else if (!this.repassword.trim() || this.repassword === undefined) {
        this.error = '· You must be input repassword<br>'
      } else if (!regexEmail.test(this.email)) {
        this.error = '· Incorrect email format<br>'
      } else if (this.password.length < 8) {
        this.error = '· Password should contain at least 8 from the mentioned characters<br>'
      } else if (!(this.password === this.repassword)) {
        this.error = '· Password and Repassword not the same<br>'
      } else {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
        })
        signup(this.username, this.firstname, this.lastname, this.dob, this.email, this.password)
        this.$router.push('/signin')
      }
      this.$nuxt.$loading.finish()
    }
  },
  computed: {
    hasError () {
      return this.error === ''
    }
  },
  beforeMount () {
    if (this.$session.exists()) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/signup.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/main.sass';
</style>
