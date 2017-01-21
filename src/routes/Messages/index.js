module.exports = {
  path: 'messages',
  getComponent(nextState, cb) {
    System
    .import('./components/Messages')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
