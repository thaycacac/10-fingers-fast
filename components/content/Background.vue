<template>
    <div class="cd-fixed-bg cd-fixed-bg-image">
        <h2>Lorem ipsum dolor sit amet.</h2>
    </div>
</template>
<style lang="scss" scoped>
.cd-fixed-bg {
  position: relative;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  z-index: 1;
  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
  }
}
.cd-fixed-bg.cd-fixed-bg-image {
  background-image: url(https://i.imgur.com/ZG50ZEA.jpg);
}
</style>
