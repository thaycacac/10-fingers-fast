<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-4.is-offset-4
          h3.title.has-text-black {{ $t('signin.title') }}
          div.box
            figure.avatar
              img(src='../assets/img/user/logo-login.png')
            transition.bounce
              p(style='color: red' v-show='checkError') {{ error }}
            form
              div.field
                div.control
                  input.input.is-large(
                    type='text'
                    placeholder='Input username'
                    v-model='username')
              div.field
                div.control
                  input.input.is-large(
                    type='password' 
                    placeholder='Input password'
                    v-model='password')
                button.button.is-block.is-warning.is-large.is-fullwidth.--is-button-signin(
                  @click.prevent='signin'
                ) {{ $t('signin.title') }}
              div.field
                label.checkbox #[input.checkbox(type='checkbox')] {{ $t('signin.remember') }}
          p.has-choose-more
            a(href='/signup') {{ $t('signin.signup') }} &nbsp·&nbsp
            a(href='#') {{ $t('signin.forgot') }} &nbsp·&nbsp
            a(href='#') {{ $t('signin.help') }}
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  layout: 'user',
  methods: {
    signin () {
      // check input
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.error = 'Must be input all field'
        return
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      this.$axios.post('/api/user/signin', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          this.$nuxt.$loading.finish()
          if (response.data.error) {
            this.error = response.data.error
          } else {
            this.$store.dispatch('setUser', response.data.message)
            // set session
            this.$session.start()
            this.$session.set('username', this.username)
            if (this.username === 'admin') {
              this.$router.push('/admin')
            } else {
              this.$router.push('/')
            }
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
  beforeMount () {
    if (this.$session.exists()) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/signin.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/animation.scss';
@include setupAnimationError();
</style>
