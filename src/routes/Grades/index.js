export default {
  path: 'grades',
  getComponent(nextState, cb) {
    import('./components/Grades')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
