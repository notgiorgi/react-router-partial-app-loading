export default {
  path: 'announcements',

  getChildRoutes(partialNextState, cb) {
    import('./routes/Announcement')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  },

  getComponents(nextState, cb) {
    Promise
    .all([
      import('./components/Sidebar'),
      import('./components/Announcements')
    ])
    .then(components => cb(null, {
      sidebar: components[0].default,
      main: components[1].default
    }))
    .catch(err => cb(err))
  }
}
