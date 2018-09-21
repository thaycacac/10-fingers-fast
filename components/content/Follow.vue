<template>
  <div class="container-follow">
    <p class="is-title-follow">Cập nhật bài học mới nhất</p>
    <form>
      <input 
        type="email" 
        placeholder="Nhập Email..." 
        class="is-email"
        v-model="email">
      <input 
        type="submit" 
        value="Đăng ký" 
        class="is-button"
        @click.prevent = "registerEmail">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    registerEmail () {
      this.$axios.post('/api/email', {
        email: this.email
      })
      .then((result) => {
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
};
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
</style>
