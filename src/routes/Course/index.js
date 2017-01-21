module.exports = {
  path: 'course/:courseId',

  getChildRoutes(partialNextState, cb) {
    Promise
    .all([
      System.import('./routes/Announcements'),
      System.import('./routes/Assignments'),
      System.import('./routes/Grades')
    ])
    .then(components => cb(null, components))
    .catch(err => cb(err))
  },

  getComponent(nextState, cb) {
    System
    .import('./components/Course')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
