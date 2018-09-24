<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../assets/img/logo2.png" alt="logo">
        </a>
        <div 
          class="navbar-burger burger" 
          data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div 
        id="navbarExampleTransparentExample" 
        class="navbar-menu">
        <div class="navbar-end">
        <div class="group-navbar">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Trang chủ
            </a>
            <a class="navbar-item" href="/learn">
              Luyện gõ 10 ngón
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              Tài khoản
            </a>
            <div class="navbar-dropdown is-boxed">
              <a 
                v-for="item in navigator" 
                :href="item.link" 
                :key="item.link"
                class="navbar-item">
                {{ item.name }}
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Ngôn ngữ
            </a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link
                class="navbar-item"
                v-for="(locale, i) in showLocales"
                :key="i"
                :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.navbar-scroll {
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
<script>
export default {
  data () {
    return {
      navigator: ''
    }
  },
  methods: {
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
    // check login or not
    if (this.$session.get('username')) {
      this.navigator = [
        { link: '/profile', name: 'Trang cá nhân' },
        { link: '/logout', name: 'Đăng xuất' }
      ]
    } else {
      this.navigator = [
        { link: '/signup', name: 'Đăng ký' },
        { link: '/signin', name: 'Đăng nhập' }
      ]
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>