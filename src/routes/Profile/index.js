export default {
  path: 'profile',
  getComponent(nextState, cb) {
    import('./components/Profile')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
