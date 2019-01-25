<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <p style="color: red">Title: {{ item.title.rendered }}</p>
      <img :src="item._embedded['wp:featuredmedia'][0].source_url">
      <p v-html="item.excerpt.rendered"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null
    }
  },
  mounted() {
    this.$axios.get(`https://travel-app.000webhostapp.com/wp-json/wp/v2/posts?_embed`)
      .then(result => {
        console.log(result.data)
        this.list = result.data
      })
  }
}
</script>
