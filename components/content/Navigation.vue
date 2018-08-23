<template>
    <div class="my-navigation">
        <div class="container">
            <p class="has-text">WEB DESIGN</p>
            <p>/</p>
            <p class="has-text">GRAPHICS</p>
            <p>/</p>
            <p class="has-text">MAGENTO</p>
            <p>/</p>
            <p class="has-text">WORDPRESS</p>
            <p>/</p>
            <p class="has-text">APPLICATIONS</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.my-navigation {
  height: 90px;
  line-height: 90px;
  text-align: center;
  background-color: $color-main;
  color: white;
}
.container{
  p{
    display: inline;
  }
  .has-text{
      margin: 0 16px;
      font-size: 14px;
      font-weight: 100;
  }
}
</style>
