<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-8.is-offset-2
          h3.title.has-text-black {{ $t('signup.title') }}
          div.box
            p(class='has-error') {{ GET_ERROR }}
            form
              div.field
                label.label {{ $t('signup.username') }}
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
                @click.prevent='USER_SIGNUP(username, firstname, lastname, dob, email, password, repassword)'
              ) {{ $t('signup.title') }}
          p.has-choose-more
            nuxt-link(to='/signin') {{ $t('signup.signin') }}
</template>

<script>
import { USER_SIGNUP } from '~/axios/user/usersController'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      username: '',
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      password: '',
      repassword: '',
      error: ''
    }
  },
  transition: 'perfect',
  layout: 'user',
  methods: {
    USER_SIGNUP
  },
  computed: mapGetters([
    'GET_ERROR'
  ]),
  beforeCreate() {
    const account = this.$store.getters.GET_ACCOUNT
    if (account) {
      this.$router.push('/')
    }
  },
  // middleware: 'authentication'
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
.hero.is-success
  background-image: url('/img/user/background-login-register.jpg')
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.hero .nav, .hero.is-success .nav
  -webkit-box-shadow: none
  box-shadow: none
.avatar
  margin-top: -70px
  padding-bottom: 20px
input
  font-weight: 300
p
  font-weight: 700
p.subtitle
  padding-top: 1rem
form
  padding: 15px
.has-choose-more a
  color: black
  &:hover
    color: #e6af2a
label
  text-align: left
.has-error
  color: red
  font-size: 20px

</style>
