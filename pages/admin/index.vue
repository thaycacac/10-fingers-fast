<template lang="pug">
  div.columns
    div.column.is-12
      div.card.events-card
        header.card-header
          p.card-header-title Events
          a.card-header-icon(href='#')
        div.card-table
          div.content
            table.table.is-fullwidth.is-striped
              tbody
                tr
                  td(width='5%')
                    i.fa.fa-bell-o
                  td Create lesson
                  td
                    nuxt-link.button.is-small.is-primary(to='/admin/createLesson') Action
                tr
                  td(width='5%')
                    i.fa.fa-bell-o
                  td Create list lessons
                  td
                    a.button.is-small.is-primary(href='/admin/createListLesson') Action
        footer.card-footer
          p.card-footer-item Copyright © 2018 THAYCACAC.
</template>

<script>
export default {
  layout: "admin",
  middleware: "admin"
};
</script>
