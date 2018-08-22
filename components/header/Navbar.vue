<template>
    <nav class="navbar is-transparent is-fixed-top">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../../assets/img/logo.png" alt="logo">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-end">
                    <div class="group-navbar">
                        <div class="navbar-start">
                            <a class="navbar-item" href="#">
                                Home
                            </a>
                            <a class="navbar-item" href="#">
                                Elements
                            </a>
                            <a class="navbar-item" href="#">
                                Pages
                            </a>
                            <a class="navbar-item" href="#">
                                Portfolio
                            </a>
                            <a class="navbar-item" href="#">
                                Blog
                            </a>
                            <a class="navbar-item" href="#">
                                Shop
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="#">
                                User
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="#">
                                    Profile
                                </a>
                                <a class="navbar-item" href="#">
                                    Logout
                                </a>
                            </div>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="#">
                                Language
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="#">
                                    VietNamese
                                </a>
                                <a class="navbar-item" href="#">
                                    English
                                </a>
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
    .group-navbar {
        margin: 9px 25px 0px 0px;
        text-transform: uppercase;
    }

    .navbar-link::after {
        border-color: $font-color-link-hover
    }
    .navbar, .navbar-menu, .navbar-start, .navbar-end {
        background-color: transparent; 
    }
    .navbar-scroll {
        background-color: #ffffff;
    }
</style>
<script>
export default {
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
    window.addEventListener('scroll', this.handleScroll);
  }
};

</script>