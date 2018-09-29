export default function ({ store, redirect, req }) {
  if (req.session.user) {
    return redirect('/')
  }
}
