const getters = {
  appNameWitnVersion: (state) => {
    return state.appName + 'v2.0'
    // es6
    // return `${state.appName}v2.0`
  }
}
export default getters
