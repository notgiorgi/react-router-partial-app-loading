module.exports = {
  path: 'announcements',

  getChildRoutes(partialNextState, cb) {
    System
    .import('./routes/Announcement')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  },

  getComponents(nextState, cb) {
    Promise
    .all([
      System.import('./components/Sidebar'),
      System.import('./components/Announcements')
    ])
    .then(components => cb(null, {
      sidebar: components[0],
      main: components[1]
    }))
    .catch(err => cb(err))
  }
}
