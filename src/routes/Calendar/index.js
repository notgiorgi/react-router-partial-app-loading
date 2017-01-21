module.exports = {
  path: 'calendar',
  getComponent(nextState, cb) {
    System
    .import('./components/Calendar')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
