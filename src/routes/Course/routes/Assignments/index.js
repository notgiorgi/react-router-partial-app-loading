export default {
  path: 'assignments',

  getChildRoutes(partialNextState, cb) {
    import('./routes/Assignment')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  },

  getComponents(nextState, cb) {
    Promise
    .all([
      import('./components/Sidebar'),
      import('./components/Assignments')
    ])
    .then(components => cb(null, {
      sidebar: components[0].default,
      main: components[1].default
    }))
    .catch(err => cb(err))
  }
}
