<template lang="pug">
  footer.footer.is-footer
    div.content.has-text-centered
      p Copyright © 2018 
        strong
          a.__link-footer(href="https://github.com/thaycacac") THAYCACAC
      div.has-text-centered(align="center")
      ul
        li
          a(href="https://facebook.com/thaycacac")
            i.fab.fa-facebook
        li
          a(href="https://twitter.com/Thaycacac")
            i.fab.fa-twitter
        li
          a(href="https://www.instagram.com/thaycacac")
            i.fab.fa-instagram
        li
          a(href="mailto:thaycacac@gmail.com?Subject=Hello%20Thaycacac" target="_top")
            i.fas.fa-envelope
        li
          a(href="https://github.com/thaycacac")
            i.fab.fa-github-square
        li
          a(href="https://www.youtube.com/channel/UCSfVU0_rcB5Kn1SkYrcTbRw")
            i.fab.fa-youtube-square
        li
          a(href="https://www.linkedin.com/in/Thaycacac")
            i.fab.fa-linkedin
</template>
<style lang="sass" scoped>
@import '~/assets/sass/main.sass'
ul
  list-style-type: none
  li
    display: inline-block
    color: white
    margin-right: 5px
    a
      color: white
</style>
