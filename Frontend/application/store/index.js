import Vuex from 'vuex'
import session from './modules/session'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      session
    },
    state: {
      landed: false,
      fullScreen: true
    },
    mutations: {
      fullScreenOn(state) {
        state.fullScreen = true
      },
      fullScreenOff(state) {
        state.fullScreen = false
      }
    }
  })
}

export default createStore
