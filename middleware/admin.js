export default function ({ redirect, store }) {
  if (store.getters.GET_ACCOUNT || store.getters.GET_ACCOUNT.username !== 'admin') {
    return redirect('/')
  }
}
