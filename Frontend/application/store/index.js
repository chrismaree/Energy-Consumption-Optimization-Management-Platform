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
      setLanded(state) {
        state.landed = true
      }
    }
  })
}

export default createStore
