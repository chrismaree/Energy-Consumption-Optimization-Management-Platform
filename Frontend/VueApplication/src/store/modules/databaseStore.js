// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';
import DatabaseAccessor from '../../../../utils/databaseAccessor'

const databaseAccessor = new DatabaseAccessor()
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
        console.log(databaseAccessor)
        databaseAccessor.getGeoJson().then(geoJson => {
            console.log(geoJson)
          commit('setMapGeoJson', geoJson[0])
        })


    }
}

export default {
    state,
    getters,
    mutations,
    actions
}