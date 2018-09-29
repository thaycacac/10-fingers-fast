export default function ({ redirect, req }) {
  if (!req.session.user) {
    return redirect('/')
  }
}
