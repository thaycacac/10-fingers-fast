import Vuex from 'vuex'
import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'

const store = () => new Vuex.Store({
  state: {
    user: {
      username: '',
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      password: ''
    }
  },
  getters,
  mutations,
  actions
})

export default store
