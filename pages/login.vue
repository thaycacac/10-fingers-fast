<template>
    <section class="hero is-success is-fullheight">
        <navbar></navbar>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Đăng Nhập</h3>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Nhập email" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Nhập mật khẩu">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox">
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth" @click.prevent="testpost">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Đăng ký</a> &nbsp;·&nbsp;
                        <a href="../">Quên mật khẩu</a> &nbsp;·&nbsp;
                        <a href="../">Giúp?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '../assets/sass/user/login.sass';
@import '../assets/sass/main.sass';
nav.navbar.is-transparent.is-fixed-top {
  background: $color-primary;
}
</style>
<script>
import Navbar from '../components/header/Navbar'
import axios from 'axios'
export default {
  components: {
    Navbar
  },
  methods: {
    testpost() {
      console.log('click')
      axios.get('/api')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

