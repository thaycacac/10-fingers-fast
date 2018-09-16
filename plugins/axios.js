import * as axios from 'axios'
import VueSession from 'vue-session'
import Vue from 'vue'

Vue.use(VueSession)

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 5000}`
}
export default axios.create(options)
