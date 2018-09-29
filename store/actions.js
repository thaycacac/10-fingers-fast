export default {
  SET_USER ({ commit }, user) {
    commit('setUser', user)
  },

  SET_ERROR ({commit}, error) {
    commit('setError', error)
  }
}
