import Vuex from 'vuex'
import session from './modules/session'

const createStore = () => {
  return new Vuex.Store({
    modules: {session},
    state: {
      counter: 0
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
}

export default createStore
