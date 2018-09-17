<template>
    <section class="hero is-success is-fullheight is-login">
        <navbar></navbar>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-8 is-offset-2">
                    <h3 class="title has-text-black">Đăng Ký</h3>
                    <div class="box">
                        <p class="has-error" v-show="!hasError" v-html="error"></p>
                        <form>
                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Nhập tên tài khoản" autofocus="" v-model="username">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Nhập tên họ" v-model="firstname">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Nhập tên tài khoản" v-model="lastname">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Date of Birth</label>
                                <div class="control">
                                    <input class="input is-large" type="date" v-model="dob">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Nhập email" v-model="email">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Nhập mật khẩu" v-model="password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Repassword</label>
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Nhập lại mật khẩu" v-model="repassword">
                                </div>
                            </div>
                            <button class="button is-block is-warning is-large is-fullwidth" @click.prevent="signup">Đăng Ký</button>
                        </form>
                    </div>
                    <p class="has-choose-more">
                        <a href="../">Đăng nhập</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/header/Navbar'
import { signup } from '../axios/user/usersController'
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
  components: {
    Navbar
  },
  methods: {
    signup() {
      this.error = ''

      const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      window.scrollTo(0, top);
      if (!this.username.trim() || this.username === undefined) {
        this.error = '· You must be input username<br>'
      } else if (!this.firstname.trim() || this.firstname === undefined) {
        this.error = '· You must be input firstname<br>'
      } else if (!this.lastname.trim() || this.lastname === undefined) {
        this.error = '· You must be input lastname<br>'
      } else if (!this.dob.trim() || this.dob === undefined) {
        this.error = '· You must be input date of birth<br>'
      } else if (!this.email.trim() || this.email === undefined) {
        this.error = '· You must be input email<br>'
      } else if (!this.password.trim() || this.password === undefined) {
        this.error = '· You must be input password<br>'
      } else if (!this.repassword.trim() || this.repassword === undefined) {
        this.error = '· You must be input repassword<br>'
      } else if (!regexEmail.test(this.email)) {
        this.error = '· Incorrect email format<br>'
      } else if (this.password.length < 8) {
        this.error = '· Password should contain at least 8 from the mentioned characters<br>'
      } else if (!(this.password === this.repassword)) {
        this.error = '· Password and Repassword not the same<br>'
      } else {
        signup(this.username, this.firstname, this.lastname, this.dob, this.email, this.password)
        this.$router.push('/user/signin')
      }
    }
  },
  computed: {
    hasError(){
      return this.error === ''
    } 
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/user/signup.sass';
@import '../assets/sass/main.sass';
@import '../assets/sass/main.sass';
@include setupBackgroundNav();
</style>
