<template lang="pug">
  div.container-follow
    p.is-title-follow {{ $t('follow.title') }}
    form
      input.is-email(
        type='email'
        :placeholder='placeholderEmail'
        v-model='email'
      )
      input.is-button(
        type='submit'
        :value='valueButton'
        @click.prevent='registerEmail'
      )
</template>

<script>
export default {
  data () {
    return {
      email: '',
      placeholderEmail: this.$i18n.t('follow.placeholder'),
      valueButton: this.$i18n.t('follow.button'),
    }
  },
  methods: {
    registerEmail () {
      this.$axios.post('/api/email', {
        email: this.email
      })
        .then(result => {
          this.email = ''
          this.$toast.open({
            message: 'Register Success!',
            type: 'is-success'
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
.container-follow
  margin: 80px 0px
  background-image: url('/img/background/background-fix01.jpg')
  background-size: cover
  font-family: $font-opensan
  font-weight: 300
  line-height: 1.8em
  color: #777
  text-align: center
  padding: 100px 0px
  .is-title-follow
    color: $color-follow
    letter-spacing: 8px
    font-size: 1.3em
    text-transform: uppercase
  .is-email
    text-align: center
    display: block
    margin: 90px auto 50px auto
    padding-bottom: 10px
    width: 300px
    background: none
    border: none
    border-bottom: 2px solid $font-color-price
    font-size: 2.6em
    font-weight: 400
    color: rgb(204, 203, 203)
    &:focus
      border: none
      border-bottom: 2px solid rgb(199, 199, 199)
      outline-width: 0
  .is-button
    padding: 10px 54px
    font-size: 1.1em
    letter-spacing: 3px
    background-color: $color-follow
    color: #111
    text-transform: uppercase
    font-family: $font-montserrat
    line-height: 1.8em
    border: none
    &:hover
      background-color: $color-primary
      border: none
      color: white
</style>
