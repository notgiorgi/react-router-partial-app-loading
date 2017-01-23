export default {
  path: 'course/:courseId',

  getChildRoutes(partialNextState, cb) {
    Promise
    .all([
      import('./routes/Announcements'),
      import('./routes/Assignments'),
      import('./routes/Grades')
    ])
    .then(components => {
      const routes = []
      components.forEach(({ default: component }) => routes.push(component))
      return cb(null, routes)
    })
    .catch(err => cb(err))
  },

  getComponent(nextState, cb) {
    import('./components/Course')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
