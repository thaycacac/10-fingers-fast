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
                  input.input.is-large(type='text' :value='GET_USER.username' disabled)
              div.field
                label.label {{ $t('profile.firstname') }}
                div.control
                  input.input.is-large(type='text' :value='GET_USER.firstname' disabled)
              div.field
                label.label {{ $t('profile.lastname') }}
                div.control
                  input.input.is-large(type='text' :value='GET_USER.lastname' disabled)
              div.field
                label.label {{ $t('profile.dob') }}
                div.control
                  input.input.is-large(type='text' :value='GET_USER.dob' disabled)
              div.field
                label.label {{ $t('profile.email') }}
                div.control
                  input.input.is-large(type='text' :value='GET_USER.email' disabled)
              div.field
                label.label dsfdsf
                div.control
                  input.input.is-large(type='password' :value='GET_USER.password' disabled)
              button.button.is-block.is-warning.is-large.is-fullwidth(
                @click.prevent=signup
                disabled
              ) update
          p.has-choose-more
            a(href='#') {{ $t('profile.update') }}
</template>

<script>
import { USER_PROFILE } from '~/axios/user/usersController'
import { mapGetters } from 'vuex'
export default {
  layout: 'user',
  computed: mapGetters([
    'GET_USER'
  ]),
  methods: {
    // TODO: update
    update () {
      console.log(this)
    }
  },
  beforeMount () {
    USER_PROFILE(this)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/profile.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/main.sass';
</style>
