export default {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    if (req.session && req.session.user) {
      commit('setAccount', req.session.user)
    }
  },

  SET_USER({
    commit
  }, user) {
    commit('setUser', user)
  },

  SET_ERROR({
    commit
  }, error) {
    commit('setError', error)
  }
}
