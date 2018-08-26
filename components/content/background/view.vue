<template>
    <div class="is-one-component">
       <i :class="icon"></i>
       <p class="is-number">{{ content }}</p>
       <p class="is-description">{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    content: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../../assets/sass/main.sass";
.is-one-component {
  color: white;
  font-size: 45px;
  text-align: center;
  font-weight: 50;
  i {
    margin-top: 35px;
    color: white;
  }
  .is-number {
    font-size: 55px;
    font-weight: 600;
    font-family: $font-opensan;
  }
  .is-description {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ababab;
  }
}
</style>
