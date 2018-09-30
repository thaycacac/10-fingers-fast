<template>
  <section class="page-error">
    <h1 class="title is-2">10 FingersFast</h1>
    <p id="error">{{ error.statusCode }}</p>
    <p id="explanation">{{ error.message }}.</p>
    <div id="container">
      <div class="server" id="server1">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led green-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led green-led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
      <div class="server" id="server2">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led "></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
      <div class="server" id="server3">
        <div class="hdd-container">
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
          <div class="hdd">
            <div class="led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led red-led"></div>
            <div class="led"></div>
          </div>
        </div>
        <div class="cooling-system">
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['error']
  }
</script>

<style scoped>
@import '../assets/sass/error/error.scss';
</style>