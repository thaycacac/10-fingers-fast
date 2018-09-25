<template lang="pug">
  div.one-page-guide {{ $t('guideFinger.description.two') }}
    br
    br
    table.table.is-striped(style='margin: 0 auto; width: 700px;')
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
          td.is-titalic {{ $t('guideFinger.two.one') }}
          td {{ $t('guideFinger.fingers.two') }}
          td.is-titalic {{ $t('guideFinger.two.two') }}
        tr
          td {{ $t('guideFinger.fingers.three') }}
          td.is-titalic {{ $t('guideFinger.two.three') }}
          td {{ $t('guideFinger.fingers.four') }}
          td.is-titalic {{ $t('guideFinger.two.four') }}
        tr
          td {{ $t('guideFinger.fingers.five') }}
          td.is-titalic {{ $t('guideFinger.two.five') }}
          td {{ $t('guideFinger.fingers.six') }}
          td.is-titalic {{ $t('guideFinger.two.six') }}
        tr
          td {{ $t('guideFinger.fingers.seven') }}
          td.is-titalic {{ $t('guideFinger.two.seven') }}
          td {{ $t('guideFinger.fingers.eight') }}
          td.is-titalic {{ $t('guideFinger.two.eight') }}
        tr
          td {{ $t('guideFinger.fingers.nine') }}
          td.is-titalic {{ $t('guideFinger.two.nine') }}
          td {{ $t('guideFinger.fingers.ten') }}
          td.is-titalic {{ $t('guideFinger.two.ten') }}
</template>