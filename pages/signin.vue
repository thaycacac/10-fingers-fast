<template>
  <section class="hero is-success is-fullheight is-login">
    <navbar></navbar>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Đăng Nhập</h3>
          <div class="box">
            <figure class="avatar">
              <img src="../assets/img/user/logo-login.png">
            </figure>
            <transition name="bounce">
              <p style="color: red" v-show="checkError">{{ error }}</p>
            </transition>
            <form>
              <div class="field">
                <div class="control">
                  <input 
                  class="input is-large" 
                  type="text" 
                  placeholder="Nhập tên tài khoản" 
                  autofocus="" 
                  v-model="username">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input 
                  class="input is-large" 
                  type="password" 
                  placeholder="Nhập mật khẩu" 
                  v-model="password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Nhớ mật khẩu
                </label>
              </div>
              <button 
              class="button is-block is-warning is-large is-fullwidth" 
              @click.prevent="signin">Đăng Nhập</button>
            </form>
          </div>
          <p class="has-choose-more">
            <a href="../">Đăng ký</a> &nbsp;·&nbsp;
            <a href="../">Quên mật khẩu</a> &nbsp;·&nbsp;
            <a href="../">Giúp?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/header/Navbar'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    signin() {
      // check input
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.error = 'Must be input all field'
        return
      } 
      axios.post('/api/user/signin',{
        username: this.username,
        password: this.password
      })
      .then( response => {
        if (response.data.error) {
          this.error = response.data.error
        } else {
          this.$store.dispatch('setUser', response.data.message)
          // set session
          this.$session.start()
          this.$session.set('username', this.username)
          this.$router.push('/') 
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  computed: {
    checkError () {
      return this.error !== ''
    }
  },
  beforeMount() {
    if (this.$session.exists()) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/user/signin.sass';
@import '../assets/sass/main.sass';
@import '../assets/sass/animation.scss';
@include setupBackgroundNav();
@include setupAnimationError();
</style>
