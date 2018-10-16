<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-4.is-offset-4
          h3.title.has-text-black {{ $t('signin.title') }}
          div.box
            figure.avatar
              img(src='../assets/img/user/logo-login.png' alt='logo login')
            transition.bounce
              p(style='color: red') {{ GET_ERROR }}
            form
              div.field
                div.control
                  input.input.is-large(
                    type='text'
                    placeholder='Input username'
                    v-model='username')
              div.field
                div.control
                  input.input.is-large(
                    type='password' 
                    placeholder='Input password'
                    v-model='password')
                button.button.is-block.is-warning.is-large.is-fullwidth.--is-button-signin(
                  @click.prevent='USER_SIGNIN(username, password)'
                ) {{ $t('signin.title') }}
              div.field
                label.checkbox #[input.checkbox(type='checkbox')] {{ $t('signin.remember') }}
          p.has-choose-more
            a(href='/signup') {{ $t('signin.signup') }} &nbsp·&nbsp
            a(href='#') {{ $t('signin.forgot') }} &nbsp·&nbsp
            a(href='#') {{ $t('signin.help') }}
</template>
<script>
import { USER_SIGNIN } from '~/axios/user/usersController'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  layout: 'user',
  methods: {
    USER_SIGNIN
  },
  computed: mapGetters([
    'GET_ERROR'
  ]),
  middleware: 'authentication',
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/signin.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/animation.scss';
@include setupAnimationError();
</style>
