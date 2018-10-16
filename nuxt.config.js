const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const DBConfig = require('./server/configuration/mongoDB')
const { I18N } = require('./config')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Typing Study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website luyện gõ 10 ngón' },
      { hid: 'keywords', name: 'keywords', content: 'luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
        integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js' }
    ]
  },
  css: [
    '~/assets/css/main.css',
    './assets/sass/main.sass',
    './assets/css/transition.css',
    './assets/css/fonts.css',
    'aos/dist/aos.css'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    [ 'nuxt-i18n', I18N ]
  ],
  plugins: [
    { src: '~/plugins/aos.js', ssr: false }
  ],
  axios: {
    proxy: true
  },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:5000/api',
  //     pathRewrite: { '^/api': '' }
  //   }
  // },
  loading: '~/components/share/loading.vue',
  build: {
    vendor: [
      'axios',
      'aos'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'thaycacac',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 600000 }
    }),
    // set moongoose
    mongoose.connect(DBConfig.dbconfig.nameDB, {
      useNewUrlParser: true
    })
      .then(() => {
        console.log('Database connected')
      }),
    // API middleware
    '~/server/users.js',
    '~/server/lessons.js',
    '~/server/listlessons.js',
    '~/server/emails.js'
  ]
}
