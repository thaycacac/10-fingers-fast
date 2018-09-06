import Vuex from 'vuex'
import mutations from '~/store/mutations'
import actions from '~/store/actions'

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
  mutations,
  actions
})

export default store
