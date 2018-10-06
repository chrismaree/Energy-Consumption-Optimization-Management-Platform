import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import session from './modules/session'
import databaseAccessor from './modules/databaseAccessor'

Vue.use(Vuex)


const createStore = () => {
    return new Vuex.Store({
        modules: {
            session,
            databaseAccessor
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