export default function ({ redirect, req }) {
  if (!req.session.user) {
    return redirect('/')
  } else if (req.session.user.username !== 'admin') {
    return redirect('/')
  }
}
