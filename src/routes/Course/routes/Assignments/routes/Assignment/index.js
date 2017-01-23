export default {
  path: ':assignmentId',
  getComponent(nextState, cb) {
    import('./components/Assignment')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
