module.exports = {
  path: 'grades',
  getComponent(nextState, cb) {
    System
    .import('./components/Grades')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
