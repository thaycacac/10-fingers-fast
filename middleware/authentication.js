export default function ({ store, redirect }) {
  if (store.state.user) {
    return redirect('/signin')
  } else {
    return redirect('/')
  }
}
