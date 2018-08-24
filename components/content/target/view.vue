<template>
    <div class="my-target">
       <img src="../../../assets/img/target.png" alt="target">
       <h5 class="title">{{ title }}</h5>
       <p>{{ content }}</p>
    </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/main.sass';
.my-target {
  background-color: white;
  padding: 50px 40px;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  border-radius: 15px;
  &:hover {
    animation-duration: 0.5s;
    margin-top: -5px;
    background-size: 400% 400%;
    color: white !important;
    background: linear-gradient($randomNumber + deg, rgb(226, 226, 226), #ffffff);
    cursor: pointer;
  }
  h5{
    margin-top: 40px;
    margin-bottom: 30px;
    font-size: 1.07em;
    letter-spacing: 3px;
    font-family: $font-montserrat;
    color: #111;
    text-transform: uppercase;}
  p{
    font-family: $font-opensan;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 1.8em;
    color: $font-color-price;
  }
}
</style>

