<template>
</template>
<script>
export default {
  beforeMount () {
    this.$session.destroy()
    this.$router.push('/')
  }
}
</script>

