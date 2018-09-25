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

<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
