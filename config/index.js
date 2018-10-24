const en = require('../lang/en-US.js')
const vn = require('../lang/vn-VN.js')

const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'vn',
      iso: 'vn-VN',
      name: 'Vietnamese'
    }
  ],
  defaultLocale: 'en',
  routes: {
    'index': {
      vn: '/vi'
    },
    'learn': {
      vn: '/vi'
    },
    'profile': {
      vn: '/vi'
    },
    'signin': {
      vn: '/vi'
    },
    'signup': {
      vn: '/vi'
    },
    'lesson/_id': {
      en: '/lesson/:id?',
      vn: '/bai-so/:id?'
    }
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, vn }
  }
}

module.exports = {
  I18N
}
