export default {
  path: 'calendar',
  getComponent(nextState, cb) {    
    import('./components/Calendar')
      .then(({ default: component }) => cb(null, component))
      .catch(err => cb(err))
  }
}
