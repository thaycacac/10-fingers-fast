export default {
  GET_USER: state => {
    return state.user
  },

  GET_ERROR: state => {
    return state.error
  },

  GET_ACCOUNT: state => {
    return state.account.username
  }
}
