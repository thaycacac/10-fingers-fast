<template lang="pug">
  nav.navbar.is-transparent.is-fixed-top
    div.container
      div.navbar-brand
        a.navbar-item(href='/')
          img(src='~/assets/img/logo2.png' alt='logo')
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
        div.navbar-item
          div.navbar-item.has-dropdown.is-hoverable
            a.navbar-link(
              v-if="account !== undefined"
              href='/profile') {{ account.toUpperCase() }}
              div.navbar-dropdown.is-boxed
                a.navbar-item(
                  @click='USER_LOGOUT'
                ) {{ $t('navbar.sign.logout') }}
            a.navbar-link(href='/' v-else) {{ $t('navbar.account') }}
              div.navbar-dropdown.is-boxed
                a.navbar-item(href='/signin') {{ $t('navbar.sign.signin') }}
                a.navbar-item(href='/signup') {{ $t('navbar.sign.signup') }}
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
}
</style>
<script>
import { USER_LOGOUT } from '~/axios/user/usersController'
import { mapGetters } from 'vuex'
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
    // FIXME: show error, mapGetters not work
    this.account = this.$store.getters.GET_ACCOUNT
    // check login or not
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>