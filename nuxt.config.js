module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Typing Study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
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
    './assets/sass/main.sass'
  ],
  modules: [
    // Simple usage
    'nuxt-buefy',
    // Or you can customize
    ['nuxt-buefy', { css: false, materialDesignIcons: false }]
  ],
  build: {
    vendor: ['axios'],
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
    '~/server/server.js'
  ]
}
