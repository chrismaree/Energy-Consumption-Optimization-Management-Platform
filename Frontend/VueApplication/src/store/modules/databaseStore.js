// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';
import DatabaseAccessor from '../../../../utils/databaseAccessor'

const databaseAccessor = new DatabaseAccessor()
// const auth = new Authenticator()

const state = {
    mapGeoJson: {},
    campusInfo: {},
    buildingInformation: [],
    selectedBuildingInformation: {},
    comparisonArray:[]
}

const mutations = {
    setMapGeoJson(state, mapGeoJson) {
        state.mapGeoJson = mapGeoJson
    },

    setCampusInfo(state,campusInfo){
        state.campusInfo = campusInfo
    },

    setBuildingInformation(state, buildingInformation) {
        console.log("INBUILDING")
        // console.log(buildingInformation)
        // console.log(buildingInformation["BuildingId"])
        state.buildingInformation[buildingInformation["BuildingId"]] = buildingInformation;
        state.selectedBuildingInformation = buildingInformation
        // console.log(state.buildingInformation)
    },
    addComparisonBuilding(state,buildingId){
        state.comparisonArray.push(buildingId)
    },
    removeComparisionBuilding(state,buildingId){
        var index = state.comparisonArray.indexOf(buildingId);
        if (index > -1) {
            state.comparisonArray = state.comparisonArray.array.splice(index, 1);
        }
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