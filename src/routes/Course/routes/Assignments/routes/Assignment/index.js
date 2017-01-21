module.exports = {
  path: ':assignmentId',
  getComponent(nextState, cb) {
    System
    .import('./components/Assignment')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
