// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';
import DatabaseAccessor from '../../../../utils/databaseAccessor'

const databaseAccessor = new DatabaseAccessor()
// const auth = new Authenticator()

const state = {
    mapGeoJson: {},
    campusInfo: {},
    buildingInformation: {},
}

const mutations = {
    setMapGeoJson(state, mapGeoJson) {
        state.mapGeoJson = mapGeoJson
    },

    setCampusInfo(state,campusInfo){
        state.campusInfo = campusInfo
    },

    setBuildingInformation(state, buildingInformation) {
        state.buildingInformation = buildingInformation;
        console.log(state.buildingInformation)
    }
}

const actions = {

    loadMapGeoJson({
        commit
    }) {
        databaseAccessor.getGeoJson().then(geoJson => {
            console.log(geoJson)
            commit('setMapGeoJson', geoJson[0])
        })

        databaseAccessor.getCampusInfo().then(campusInfo => {
            console.log(campusInfo)
            commit("setCampusInfo", campusInfo[0])
        })
    },

    loadBuildingInformation({
        commit,
        rootState
    }, buildingId) {
        databaseAccessor.getBuildingInformation(buildingId).then(buildingInformation => {
            console.log("LOADED INFORMATION")
            console.log(buildingInformation)
            commit('setBuildingInformation', buildingInformation[0])
        })
    }
}

export default {
    state,
    mutations,
    actions
}