<template lang="pug">
  nav.navbar.is-transparent.is-fixed-top
    div.container
      div.navbar-brand
        a.navbar-item(href='/')
          img(src='~/assets/img/logo/logo02.png' alt='logo')
        div.navbar-burger.burger(data-target='navbarExampleTransparentExample')
          span
          span
          span
      div.navbar-menu#navbarExampleTransparentExample
        div.navbar-end
        div.group-navbar
          div.navbar-start
            a.navbar-item.is-navbar-text(href='/') {{ $t('navbar.home') }}
            a.navbar-item.is-navbar-text(href='/learn') {{ $t('navbar.practice') }}
            a.navbar-item.is-navbar-text(href='https://test-typing-speed.netlify.com/#/' target="_blank") {{ $t('navbar.test') }}
        div.navbar-item
          div.navbar-item.has-dropdown.is-hoverable
            a.navbar-link(href='/') {{ $t('navbar.account') }}
            div.navbar-dropdown.is-boxed
              a.navbar-item(href='/profile' v-show="account") {{ account }}
              a.navbar-item(@click='USER_LOGOUT' v-show="account") {{ $t('navbar.sign.logout') }}
              a.navbar-item(href='/signin' v-show="!account") {{ $t('navbar.sign.signin') }}
              a.navbar-item(href='/signup' v-show="!account") {{ $t('navbar.sign.signup') }}
          div.navbar-item.has-dropdown.is-hoverable
            a.navbar-link(href='#') {{ $t('navbar.language') }}
            div.navbar-dropdown.is-boxed
              nuxt-link.navbar-item(
                v-for='(locale, i) in showLocales'
                :key='i',
                :to='switchLocalePath(locale.code)'
              ) {{ locale.name }}
</template>
<style lang="scss" scoped>
@import '~/assets/sass/main.sass';
.navbar-scroll {
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
}
</style>
<script>
import { USER_LOGOUT } from '~/axios/user/usersController'
export default {
  data () {
    return {
      account: ''
    }
  },
  methods: {
    USER_LOGOUT,
    getOffsetTop () {
      return window.scrollY
    },
    handleScroll () {
      const narbar = document.getElementsByClassName('navbar')[0]
      if (this.getOffsetTop() > 50) {
        narbar.classList.add('navbar-scroll')
      } else {
        narbar.classList.remove('navbar-scroll')
      }
    }
  },
  beforeMount () {
    this.account = this.$store.getters.GET_ACCOUNT
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>