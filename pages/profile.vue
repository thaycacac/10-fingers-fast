<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-10.is-offset-1
          h3.title.has-text-warning {{ $t('profile.title') }}
          div.box
            h1.title.is-2.has-text-black
            form
              div.field
                label.label {{ $t('profile.username') }}
                div.control
                  input.input.is-large(type='text' :value='user.username' disabled)
              div.field
                label.label {{ $t('profile.firstname') }}
                div.control
                  input.input.is-large(type='text' :value='user.firstname' disabled)
              div.field
                label.label {{ $t('profile.lastname') }}
                div.control
                  input.input.is-large(type='text' :value='user.lastname' disabled)
              div.field
                label.label {{ $t('profile.dob') }}
                div.control
                  input.input.is-large(type='text' :value='user.dob' disabled)
              div.field
                label.label {{ $t('profile.email') }}
                div.control
                  input.input.is-large(type='text' :value='user.email' disabled)
              div.field
                label.label dsfdsf
                div.control
                  input.input.is-large(type='password' :value='user.password' disabled)
              button.button.is-block.is-warning.is-large.is-fullwidth(
                @click.prevent=signup
                disabled
              ) update
          p.has-choose-more
            a(href='#') {{ $t('profile.update') }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'user',
  computed: mapGetters([
    'GET_USER'
  ]),
  methods: {
    // TODO: update
    signup () {
      console.log(this)
    }
  },
  beforeMount () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
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
          password: userCurrent.password
        })
        this.$nuxt.$loading.finish()
      })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/profile.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/main.sass';
</style>
