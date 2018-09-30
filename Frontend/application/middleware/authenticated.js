// We need to ensure that the user always lands
// all protected routes are checked for user permission
// before the user can re-direct to the routes

export default function({ store, redirect }) {
  if (!store.state.session.authenticated) {
    return redirect('/auth/sign-in')
  }
}
