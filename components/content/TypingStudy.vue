<template>
    <div class="container">
        <div class="columns">
            <div class="column is-typing-left">
                <p class="is-typing-title">Easily Adjusti</p>
                <p class="is-typing-description">Lorem ipsum dolor sit amet, ete elit consectetur adipisicing. Omnis quae, ipsam impedit eius.</p>
                <div class="is-typing-icon">
                    <i class="fas fa-vial"></i>
                </div>
            </div>
            <div class="column is-typing-center">
            </div>
            <div class="column is-typing-right">
                c
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.is-typing-center {
  background-image: url('http://themes.89elements.com/definity-html/assets/images/ipad-cover-red.png');
  background-repeat: no-repeat;
  height: 600px;
}
.is-typing-left {
  .is-typing-title {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1em;
    letter-spacing: 2px;
    font-family: $font-montserrat; 
    color: #111;
    text-transform: uppercase;
    font-weight: 500;
    lighting-color: 1.1;
    text-align: right;
  }
  .is-typing-description {
    margin: 0 0 10px;
    text-align: right;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 1.8em;
    color: $font-color-price;
  }
  .is-typing-icon {
    float: right;
    margin-left: 20px;
    width: 30%;
    text-align: left;
  }
}
</style>

