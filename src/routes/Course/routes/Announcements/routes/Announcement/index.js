export default {
  path: ':announcementId',

  getComponent(nextState, cb) {
    import('./components/Announcement')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
