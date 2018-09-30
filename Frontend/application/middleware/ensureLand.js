// // We need to ensure that the user always lands
// // on the landing page first if they have not
// // done so Before. This prevents them accessing
// // pages other than the landing page on their
// // first load (i.e hyperlinks and the like)

// export default function({ store, redirect }) {
//   console.log('MIDDALEW')
//   console.log(this.window.location.href)

//   // if (!store.state.session.authenticated) {
//   //     return redirect('/auth/sign-in')
//   // }
// }