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
  defaultLocale: 'vn',
  routes: {
    'index': {
      en: '/en'
    },
    'learn': {
      en: '/en'
    },
    'profile': {
      en: '/en'
    },
    'signin': {
      en: '/en'
    },
    'signup': {
      en: '/en'
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
