module.exports = {
  path: ':announcementId',

  getComponent(nextState, cb) {
    System.import('./components/Announcement')
    .then(component => cb(null, component))
    .catch(err => cb(err))
  }
}
