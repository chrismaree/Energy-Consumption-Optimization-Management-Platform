// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';

// const auth = new Authenticator()

const state = {
    mapGeoJson: {}
}

const getters = {
    getMapGeoJson(state) {
        return state.mapGeoJson
    },
}

const mutations = {
    setMapGeoJson(state, mapGeoJson) {
        state.mapGeoJson = mapGeoJson
    }

}

const actions = {

    loadMapGeoJson({
        dispatch,
        commit
    }) {
        commit('setMapGeoJson', {
            someString: 15
        })
        console.log("SET")

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}