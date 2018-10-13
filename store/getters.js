export default {
  GET_USER: state => {
    return state.user
  },

  GET_ERROR: state => {
    return state.error
  },

  GET_ACCOUNT: state => {
    return state.account.username
  },

  GET_FIRST_NAME: state => {
    return state.user.firstname
  },

  GET_LAST_NAME: state => {
    return state.user.lastname
  },

  GET_DOB: state => {
    return state.user.dob
  },

  GET_EMAIL: state => {
    return state.user.email
  },

  GET_PASSWORD: state => {
    return state.user.password
  }
}
