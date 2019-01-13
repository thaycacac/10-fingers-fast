<template lang="pug">
  section.hero.is-success.is-fullheight.is-login
    div.hero-body
      div.container.has-text-centered
        div.column.is-10.is-offset-1
          h3.title.has-text-warning {{ $t('profile.title') }}
          div.box
            h2.title.is-2.has-text-black
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
import { USER_PROFILE } from "~/axios/user/usersController";
import { USER_UPDATE } from "~/axios/user/usersController";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isUpdate: false,
      username: "",
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      password: "",
      repassword: ""
    };
  },
  head: {
    title: "Thông tin cá nhân | 10FingersFast | Trang luyện gõ 10 ngón",
    meta: [
      {
        name: "title",
        content: "10FingersFast - Thông tin tài  khoản trang luện gõ 10 ngón"
      },
      {
        hid: "description",
        name: "description",
        content: "Trang luyện gõ bàn phím 10 ngón"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon"
      }
    ]
  },
  transition: "perfect",
  layout: "user",
  computed: {
    ...mapGetters(["GET_USER", "GET_ERROR"]),
    checkUpdate: function() {
      return this.isUpdate;
    }
  },
  methods: {
    enableUpdate() {
      this.isUpdate = !this.isUpdate;
    },
    USER_UPDATE
  },
  middleware: "authentication",
  beforeMount() {
    USER_PROFILE(this);
  },
  beforeUpdate() {
    this.username = this.$store.getters.GET_ACCOUNT;
    this.firstname = this.$store.getters.GET_FIRST_NAME;
    this.lastname = this.$store.getters.GET_LAST_NAME;
    this.dob = this.$store.getters.GET_DOB;
    this.email = this.$store.getters.GET_EMAIL;
    this.password = this.$store.getters.GET_PASSWORD;
    this.repasswor = this.$store.getters.GET_REPASSWORD;
  }
};
</script>

<style lang="sass" scoped>
@import '~/assets/sass/main.sass';
.hero.is-success
  background-image: url('/img/user/background-profile.jpg')
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.hero .nav, .hero.is-success .nav
  -webkit-box-shadow: none
  box-shadow: none
.avatar
  margin-top: -70px
  padding-bottom: 20px
input
  font-weight: 300
p
  font-weight: 700
p.subtitle
  padding-top: 1rem
form
  padding: 15px
.has-choose-more a
  color: black
  &:hover
    color: #e6af2a
label
  text-align: left
.has-error
  color: red
  font-size: 20px
</style>
