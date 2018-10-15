<template lang="pug">
  div
    nav.navbar.is-white
      div.container
        div.navbar-brand
          a.navbar-item.brand-text(href="/admin") Admin
    div.container
      div.columns
        div.column.is-3
          aside.menu
            p.menu-label General
            ul.menu-list
              li
                a.is-active(href="/admin") Dashboard
            p.menu-label Administration
              ul.menu-list
                li
                  a Event
                  ul
                    li
                      a(href="/admin/createLesson") Create Lesson
                    li
                      a(href="/admin/createListLesson") Create List Lesson
        div.column.is-9
          section.hero.is-info.welcome.is-small
            div.hero-body
              div.container
                h1.title Hello, Admin.
                h2.subtitle 10 Fingers Fast!
          section.info-tiles
            div.tile.is-ancestor.has-text-centered
              div.tile.is-parent
                article.tile.is-child.box
                  p.title 436 User
                  p.subtitle Users
              div.tile.is-parent
                article.tile.is-child.box
                  p.title 15
                  p.subtitle List Lessons
              div.tile.is-parent
                article.tile.is-child.box
                  p.title 6
                  p.subtitle Type
              div.tile.is-parent
                article.tile.is-child.box
                  p.title 150
                  p.subtitle Lessons
          nuxt
</template>

<style lang="scss" scoped>
.tile {
  margin-top: 1px;
}
</style>

