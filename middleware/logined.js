export default function ({
  redirect,
  store
}) {
  if (store.getters.GET_ACCOUNT) {
    return redirect('/')
  }
}
