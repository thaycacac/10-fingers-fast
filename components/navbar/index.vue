<template lang="pug">
  nav.navbar.is-transparent.is-fixed-top
    div.container
      div.navbar-brand
        nuxt-link.navbar-item(to='/')
          img(src='/img/logo/logo02.png' alt='logo 10fingersfast')
        div.navbar-burger.burger(data-target='navbarExampleTransparentExample')
          span
          span
          span
      div.navbar-menu#navbarExampleTransparentExample
        div.navbar-end
        div.group-navbar
          div.navbar-start
            nuxt-link.navbar-item.is-navbar-text(to='/') {{ $t('navbar.home') }}
            nuxt-link.navbar-item.is-navbar-text(to='/learn') {{ $t('navbar.practice') }}
            a.navbar-item.is-navbar-text(href='https://test-typing-speed.netlify.com/#/' target="_blank") {{ $t('navbar.test') }}
        div.navbar-item
          div.navbar-item.has-dropdown.is-hoverable
            nuxt-link.navbar-link(to='/') {{ $t('navbar.account') }}
            div.navbar-dropdown.is-boxed
              nuxt-link.navbar-item(to='/profile' v-show="account") {{ account }}
              a.navbar-item(@click='USER_LOGOUT' v-show="account") {{ $t('navbar.sign.logout') }}
              nuxt-link.navbar-item(to='/signin' v-show="!account") {{ $t('navbar.sign.signin') }}
              nuxt-link.navbar-item(to='/signup' v-show="!account") {{ $t('navbar.sign.signup') }}
          div.navbar-item.has-dropdown.is-hoverable
            nuxt-link.navbar-link(to='#') {{ $t('navbar.language') }}
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
