<template>
    <div class="container-follow">
        <p class="is-title-follow">Join our newsletter</p>
        <form>
            <input type="email" placeholder="Your email address" class="is-email">
            <input type="submit" value="Join us">
        </form>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/sass/main.sass';
.container-follow {
  margin: 80px 0px;
  background: rgba(0, 0, 0, 0.5);
  font-family: $font-opensan;
  font-weight: 300;
  line-height: 1.8em;
  color: #777;
  text-align: center;
  padding: 100px 0px;
  .is-title-follow {
    color: #ececec;
    letter-spacing: 8px;
    font-size: 1.3em;
    text-transform: uppercase;
  }
  .is-email {
    text-align: center;
    display: block;
    margin: 90px auto 50px auto;
    padding-bottom: 10px;
    width: 600px;
    background: none;
    border: none;
    border-bottom: 2px solid #777;
    font-size: 2.6em;
    font-weight: 400;
    color: #999;
  }
}
</style>
