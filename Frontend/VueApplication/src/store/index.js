import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import session from './modules/session'

Vue.use(Vuex)


const createStore = () => {
    return new Vuex.Store({
        modules: {
            session
        },
        state: {
            storeVal: 5
        },
        mutations: {

        },
        plugins: [createPersistedState()]
    })
}

export default createStore