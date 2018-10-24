<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-10.is-offset-1
          h3.title.has-text-warning {{ $t('profile.title') }}
          div.box
            h1.title.is-2.has-text-black
            p(class='has-error') {{ GET_ERROR }}
            form
              div.field
                label.label {{ $t('profile.username') }}
                div.control
                  input.input.is-large(type='text' v-model='GET_USER.username' disabled)
              div.field
                label.label {{ $t('profile.firstname') }}
                div.control
                  input.input.is-large(type='text' v-model="firstname" :disabled="!checkUpdate")
              div.field
                label.label {{ $t('profile.lastname') }}
                div.control
                  input.input.is-large(type='text' v-model='lastname' :disabled="!checkUpdate")
              div.field
                label.label {{ $t('profile.dob') }}
                div.control
                  input.input.is-large(type='text' v-model='dob' :disabled="!checkUpdate")
              div.field
                label.label {{ $t('profile.email') }}
                div.control
                  input.input.is-large(type='text' v-model='email' :disabled="!checkUpdate")
              div.field
                label.label {{ $t('profile.password') }}
                div.control
                  input.input.is-large(type='password' v-model='password' :disabled="!checkUpdate")
              div.field(v-if="checkUpdate")
                label.label {{ $t('profile.repassword') }}
                div.control
                  input.input.is-large(type='password' v-model='repassword' :disabled="!checkUpdate")
              button.button.is-block.is-warning.is-large.is-fullwidth(
                @click.prevent="enableUpdate"
                v-if="!checkUpdate"
              ) {{ $t('profile.edit') }}
              button.button.is-block.is-warning.is-large.is-fullwidth(
                @click.prevent='USER_UPDATE(username, firstname, lastname, dob, email, password, repassword)'
                v-else
              ) {{ $t('profile.update') }}
          p.has-choose-more(v-if="checkUpdate")
            button.button.is-warning.is-outlined(@click.prevent="enableUpdate") {{ $t('profile.cancel') }}
</template>

<script>
import { USER_PROFILE } from '~/axios/user/usersController'
import { USER_UPDATE } from '~/axios/user/usersController'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isUpdate: false,
      username: '',
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      password: '',
      repassword: ''
    }
  },
  layout: 'user',
  computed: {
    ...mapGetters([
      'GET_USER',
      'GET_ERROR'
    ]),
    checkUpdate: function () {
      return this.isUpdate
    }
  },
  methods: {
    enableUpdate () {
      this.isUpdate = !this.isUpdate
    },
    USER_UPDATE
  },
  middleware: 'authenticationSignin',
  beforeMount () {
    USER_PROFILE(this)
  },
  beforeUpdate() {
    this.username = this.$store.getters.GET_ACCOUNT
    this.firstname = this.$store.getters.GET_FIRST_NAME
    this.lastname = this.$store.getters.GET_LAST_NAME
    this.dob = this.$store.getters.GET_DOB
    this.email = this.$store.getters.GET_EMAIL
    this.password = this.$store.getters.GET_PASSWORD
    this.repasswor = this.$store.getters.GET_REPASSWORD
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/user/profile.sass';
@import '~/assets/sass/main.sass';
@import '~/assets/sass/main.sass';
</style>
