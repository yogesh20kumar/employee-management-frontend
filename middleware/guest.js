export default function ({ app, store, route, redirect }) {
  if (store.state.auth.loggedIn && app.$cookiz.get('auth._token.local')) {
    return redirect(
      app.localePath({ name: '/', params: route.params, query: route.query })
    )
  }
}
