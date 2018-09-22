<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="loading"> 
    <span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span></span></span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
    </span>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped lang = 'scss'>
@import '../../assets/sass/loading/loading.sass';
</style>