<template lang="pug">
  div.columns.is-one-guide
    div.column.is-4.is-left(data-aos="fade-right")
      div.columns
        div.column.is-image#guide01
          div.is-mask
          div.is-intro
            p.is-number-page 01
            p.is-text-intro {{ step }}
    div.column.is-right(data-aos="fade-left")
      div.is-guide
        i.is-icon.fas.fa-handshake
        p.is-title-guide {{ title }}
        div.one-page-guide {{ $t('guideFinger.description.one') }}
          br
          br
          table.table.is-striped.is-hidden-touch(style='margin: 0 auto; width: 700px;')
            thead
              tr
                th.has-text-centered(colspan='2') {{ $t('guideFinger.left') }}
                th.has-text-centered(colspan='2') {{ $t('guideFinger.right') }}
              tr
                th.has-text-centered {{ $t('guideFinger.finger') }}
                th.has-text-centered {{ $t('guideFinger.putHand') }}
                th.has-text-centered {{ $t('guideFinger.finger') }}
                th.has-text-centered {{ $t('guideFinger.putHand') }}
            tbody
              tr
                td {{ $t('guideFinger.fingers.one') }}
                td.is-titalic {{ $t('guideFinger.one.one') }}
                td {{ $t('guideFinger.fingers.two') }}
                td.is-titalic {{ $t('guideFinger.one.two') }}
              tr
                td {{ $t('guideFinger.fingers.three') }}
                td.is-titalic {{ $t('guideFinger.one.three') }}
                td {{ $t('guideFinger.fingers.four') }}
                td.is-titalic {{ $t('guideFinger.one.four') }}
              tr
                td {{ $t('guideFinger.fingers.five') }}
                td.is-titalic {{ $t('guideFinger.one.five') }}
                td {{ $t('guideFinger.fingers.six') }}
                td.is-titalic {{ $t('guideFinger.one.six') }}
              tr
                td {{ $t('guideFinger.fingers.seven') }}
                td.is-titalic {{ $t('guideFinger.one.seven') }}
                td {{ $t('guideFinger.fingers.eight') }}
                td.is-titalic {{ $t('guideFinger.one.eight') }}
              tr
                td {{ $t('guideFinger.fingers.nine') }}
                td.is-titalic {{ $t('guideFinger.one.nine') }}
                td {{ $t('guideFinger.fingers.ten') }}
                td.is-titalic {{ $t('guideFinger.one.ten') }}
</template>

<script>
export default {
  data () {
    return {
      step: this.$i18n.t('guide.step.step1'),
      title: this.$i18n.t('guide.title.title1')
    }
  }
}
</script>
