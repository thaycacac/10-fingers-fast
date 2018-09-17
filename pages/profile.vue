<template>
  <section class="hero is-success is-fullheight is-login">
    <navbar></navbar>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-10 is-offset-1">
          <h3 class="title has-text-black">Đăng Ký</h3>
          <div class="box">
            <h1 class="title is-2 has-text-black">My Profile</h1>
            <form>
              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input is-large" type="text" :value=user.username  disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input class="input is-large" type="text" :value=user.firstname disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input class="input is-large" type="text" :value=user.lastname disabled>
                </div>
              </div>
              <div class="field">
                  <label class="label">Date of Birth</label>
                  <div class="control">
                    <input class="input is-large" type="date" :value=user.dob disabled>
                  </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input is-large" type="email" :value=user.email disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input is-large" type="password" :value=user.password disabled>
                </div>
              </div>
              <button class="button is-block is-warning is-large is-fullwidth" @click.prevent="signup">Update</button>
            </form>
          </div>
          <p class="has-choose-more">
            <a href="../">Chỉnh sửa</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/header/Navbar'
export default {
  components: {
    Navbar
  },
  computed: mapGetters([
    'user'
  ]),
  methods: {
    signup(){
      console.log(this)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/user/profile.sass';
@import '../assets/sass/main.sass';
@import '../assets/sass/main.sass';
@include setupBackgroundNav();
</style>

