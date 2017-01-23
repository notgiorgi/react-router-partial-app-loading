export default {
  path: 'messages',
  getComponent(nextState, cb) {
    import('./components/Messages')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
