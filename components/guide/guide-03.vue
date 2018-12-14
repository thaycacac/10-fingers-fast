<template lang="pug">
  div.columns.is-one-guide
    div.column.is-4.is-left(data-aos="fade-right")
      div.columns
        div.column.is-image#guide03
          div.is-mask
          div.is-intro
            p.is-number-page 03
            p.is-text-intro {{ step }}
    div.column.is-right(data-aos="fade-left")
      div.is-guide
        i.is-icon.fas.fa-handshake
        p.is-title-guide {{ title }}
        div.one-page-guide  {{ $t('guideFinger.description.three') }}
          br
          br
          ul.menu-list
            li {{ $t('guideFinger.three.one') }}
            br
            li {{ $t('guideFinger.three.two') }}
            br
            li {{ $t('guideFinger.three.three') }}
            br
            li {{ $t('guideFinger.three.four') }}
            br
          | {{ $t('guideFinger.three.five') }}
</template>

<script>
export default {
  data () {
    return {
      step: this.$i18n.t('guide.step.step3'),
      title: this.$i18n.t('guide.title.title3')
    }
  }
}
</script>
