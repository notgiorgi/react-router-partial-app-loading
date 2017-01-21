module.exports = {
  path: 'profile',
  getComponent(nextState, cb) {
    System
    .import('./components/Profile')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
