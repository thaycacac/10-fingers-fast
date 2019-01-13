<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-4.is-offset-4
          h3.title.has-text-black {{ $t('signin.title') }}
          div.box
            figure.avatar
              img(src='/img/user/logo-login.png' alt='logo login')
            transition.bounce
              p(style='color: red') {{ GET_ERROR }}
            form
              div.field
                div.control
                  input.input.is-large(
                    type='text'
                    placeholder='Input username'
                    v-model='username'
                    :autocomplete="rememberPassword !== '' ? 'on' : 'off'")
              div.field
                div.control
                  input.input.is-large(
                    type='password'
                    placeholder='Input password'
                    v-model='password'
                    :autocomplete="rememberPassword !== '' ? 'on' : 'off'")
                button.button.is-block.is-warning.is-large.is-fullwidth.--is-button-signin(
                  @click.prevent='USER_SIGNIN(username, password)'
                ) {{ $t('signin.title') }}
              div.field
                label.checkbox #[input.checkbox(type='checkbox' v-model='rememberPassword')] {{ $t('signin.remember') }}
          p.has-choose-more
            nuxt-link(to='/signup') {{ $t('signin.signup') }} &nbsp·&nbsp
            nuxt-link(to='#') {{ $t('signin.forgot') }}
</template>
<script>
import { USER_SIGNIN } from "~/axios/user/usersController";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      rememberPassword: ""
    };
  },
  head: {
    title: "Đăng nhập | 10FingersFast | Trang luyện gõ 10 ngón",
    meta: [
      {
        name: "title",
        content: "10FingersFast - Trang đăng nhập luyện gõ 10 ngón"
      },
      {
        hid: "description",
        name: "description",
        content: "Trang luyện gõ bàn phím 10 ngón"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon"
      }
    ]
  },
  transition: "perfect",
  layout: "user",
  methods: {
    USER_SIGNIN
  },
  computed: mapGetters(["GET_ERROR"]),
  middleware: "logined"
};
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
@include setupAnimationError();
.hero.is-success
  background-image: url('/img/user/background-login-register.jpg')
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.hero .nav, .hero.is-success .nav
  -webkit-box-shadow: none
  box-shadow: none
.box
  margin-top: 5rem
.avatar
  margin-top: -70px
  padding-bottom: 20px
.avatar img
  padding: 5px
  background: #fff
  width: 100px
  border-radius: 50%
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1)
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
.--is-button-signin
  margin-top: 12px
</style>
