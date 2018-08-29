<template>
    <div>
        <div class="columns">
            <div class="column left">
                <div class="is-mask">
                </div>
                <div class="is-intro">
                    <p class="is-number-page">01</p>
                    <p class="is-text-intro">Branding</p>
                </div>
            </div>
            <div class="column right">
               <i class="fab fa-vuejs is-icon"></i>
               <p class="is-title-guide">Intelligence is nothing whitout ambition</p>
                <p class="is-content-guide">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Maxime ex eius deserunt quibusdam debitis numquam sequi quia q
                    uis eaque sapiente, recusandae ipsa, qui necessitatibus suscipit
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../../assets/sass/main.sass';
  .columns {
    .left {
      background-image: url('http://www.themezaa.com/html/h-code/images/corporate-06.jpg');
      min-height: 600px;
      background-size: cover;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      padding: 0;
      position: relative;
      z-index: 0;
      margin: 0px 0px 30px 0px;
      .is-mask {
        background-color: black;
        z-index: 1;
        position: absolute;
        min-height: 600px;
        width: 100%;
        opacity: 0.7;
      }
      .is-intro {
        position: absolute;
        z-index: 2;
        text-align: center;
        top: 68%;
        width: 100%;
        font-size: 20px;
        line-height: 35px;
        color: white;
        text-transform: uppercase;
        letter-spacing: 7px;
        .is-number-page {
          letter-spacing: 0px;
          color: $font-color-yellow;
          font-size: 35px;
          line-height: 43px;
        }
      }
    }
    .right {
      border: 5px solid rgba(255, 255, 255, 0.5);
      height: 100%;
      border-color: $color-boder;
      min-height: 600px;
      font-family: $font-opensan;
      font-size: 13px;
      counter-reset: $font-color-gray;
      line-height: 23px;
      letter-spacing: 0.02em;
      margin: 0px 50px;
      text-align: center;
      padding: 50px;
      .is-icon {
        font-size: 50px;
        color: $font-color-yellow;
      }
      .is-title-guide {
        margin-top: 25px;
        font-size: 30px;
        line-height: 42px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: inherit;
      }
      .is-content-guide {
        margin-top: 25px;
        font-size: 14px;
        line-height: 26px;
        font-family: $font-opensan;
        color: $font-color-gray;
      }
    }
  }
</style>