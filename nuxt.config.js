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
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=vietnamese',
        rel: 'stylesheet'
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i',
        rel: 'stylesheet'
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
        rel: 'stylesheet'
      }
    ]
  },
  css: [
    '~/assets/css/main.css',
    './assets/sass/main.sass',
    './assets/css/transition.css',
    'aos/dist/aos.css'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy'
    // ['nuxt-buefy', { css: false, materialDesignIcons: false }]
  ],
  plugins: [
    { src: '~/plugins/aos.js', ssr: false }
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000/api',
      pathRewrite: { '^/api': '' }
    }
  },
  loading: '~/components/share/loading.vue',
  build: {
    vendor: [
      'axios',
      '~/plugins/vue-session.js',
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
    // API middleware
    // '~/server/server.js'
  ]
}
