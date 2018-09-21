<template>
  <section class="hero is-success is-fullheight is-login">
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
                  <input 
                    class="input is-large" 
                    type="text" 
                    :value=user.username  
                    disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                  <input 
                    class="input is-large" 
                    type="text" 
                    :value=user.firstname 
                    disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                  <input 
                    class="input is-large" 
                    type="text" 
                    :value=user.lastname 
                    disabled>
                </div>
              </div>
              <div class="field">
                  <label class="label">Date of Birth</label>
                  <div class="control">
                    <input 
                      class="input is-large" 
                      type="date" 
                      :value=user.dob 
                      disabled>
                  </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input 
                    class="input is-large" 
                    type="email" 
                    :value=user.email 
                    disabled>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input 
                    class="input is-large" 
                    type="password" 
                    :value=user.password 
                    disabled>
                </div>
              </div>
              <button 
                class="button is-block is-warning is-large is-fullwidth" 
                @click.prevent="signup">Update</button>
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
export default {
  layout: 'user',
  computed: mapGetters([
    'user'
  ]),
  methods: {
    // TODO: update
    signup(){
      console.log(this)
    }
  },
  beforeMount () {
    // check login or not
    if (!this.$session.exists()) {
      this.$router.push('/')
      return
    }
    // get information user by session username
    this.$axios.post('/api/user/getProfile', {username: this.$session.get('username')})
      .then(result => {
        const userCurrent = result.data
        this.$store.dispatch('setUser', {
          username: userCurrent.username,
          firstname: userCurrent.firstname,
          lastname: userCurrent.lastname,
          dob: userCurrent.dob.toString().split('T')[0],
          email: userCurrent.email,
          password: userCurrent.password,
        })
      })
  } 
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/user/profile.sass';
@import '../assets/sass/main.sass';
@import '../assets/sass/main.sass';
</style>

