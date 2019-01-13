const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const DBConfig = require("./server/configuration/mongoDB");
const {
  I18N
} = require("./config");
module.exports = {
  head: {
    title: "Typing Study",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "title",
        content: "10FingersFast - Trang luyện gõ bàn phím dành cho người việt"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "10FingersFast là một trang web học tập miễn phí và rất dễ sử dụng, được thiết kế để giúp bạn học, luyện tập và cải thiện tốc độ và độ chính xác khi gõ bàn phím máy tính. Khi đã có thể gõ 10 ngón, bạn sẽ không cần phải nhìn vào bàn phím để tìm chữ cái muốn gõ và bạn có thể gõ với tốc độ nhanh hơn rất nhiều."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "luyện gõ bàn phím, luyen go ban phim, luyện gõ 10 ngón, luyen go 10 ngon, gõ bàn phím nhanh, go ban phim nhanh, 10 fingers fast, học gõ 10 ngón, hoc go 10 ngon, gõ 10 ngón, go 10 ngon"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      },
      {
        rel: "alternate",
        hreflang: "vn-VN"
      }
    ],
    script: [{
      src: "/javascript/tweenmax.min.js"
    }]
  },
  css: [
    "./assets/sass/main.sass",
    "./assets/css/main.css",
    "./assets/css/transition.css",
    "aos/dist/aos.css"
  ],
  modules: [
    "nuxt-robots-module",
    "@nuxtjs/axios",
    "nuxt-buefy",
    ["nuxt-i18n", I18N]
  ],
  plugins: [{
    src: "~/plugins/aos.js",
    ssr: false
  }],
  axios: {
    proxy: true
  },
  loading: "~/components/share/loading.vue",
  build: {
    vendor: ["axios", "aos"],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          // enforce: 'pre',
          // test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          // exclude: /(node_modules)/
        });
      }
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;
    }
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: "thaycacac",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000
      }
    }),
    // set moongoose
    mongoose
    .connect(
      DBConfig.dbconfig.nameDB, {
        useNewUrlParser: true
      }
    )
    .then(() => {
      console.log("Database connected");
    }),
    // API middleware
    "~/server/users.js",
    "~/server/lessons.js",
    "~/server/listlessons.js",
    "~/server/emails.js"
  ]
};
