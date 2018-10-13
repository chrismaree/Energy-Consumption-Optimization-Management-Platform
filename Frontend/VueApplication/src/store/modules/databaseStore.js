// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';
import DatabaseAccessor from '../../../../utils/databaseAccessor'

const databaseAccessor = new DatabaseAccessor()
// const auth = new Authenticator()

const state = {
    mapGeoJson: {},
    campusInfo: {},
    buildingInformation: [],
    selectedBuildingInformation: [],
    comparisonArray: [],
    buildingNames: []
}

const mutations = {
    setMapGeoJson(state, mapGeoJson) {
        state.mapGeoJson = mapGeoJson
    },

    setCampusInfo(state, campusInfo) {
        state.campusInfo = campusInfo
    },

    setBuildingInformation(state, buildingInformation) {
        console.log("INBUILDING")
        console.log(buildingInformation)
        // console.log(buildingInformation["BuildingId"])
        state.buildingInformation[buildingInformation["BuildingId"]] = buildingInformation;
        state.selectedBuildingInformation = buildingInformation
        // console.log(state.buildingInformation)
    },

    setBuildingNames(state, buildingNames) {
        state.buildingNames = buildingNames
    },

    addComparisonBuilding(state, buildingId) {
        var index = state.comparisonArray.indexOf(buildingId);
        if (index = -1) {
            state.comparisonArray.push(buildingId)
        }
    },

    removeComparisonBuilding(state, buildingId) {
        var index = state.comparisonArray.indexOf(buildingId);
        if (index > -1) {
            state.comparisonArray.splice(index, 1);
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

        databaseAccessor.getAllBuildingNames().then(buildingNames => {
            console.log(buildingNames)
            commit("setBuildingNames", buildingNames)
        })
    },

    loadBuildingInformation({
        commit,
    }, buildingId) {
        databaseAccessor.getBuildingInformation(buildingId).then(buildingInformation => {
            console.log("LOADED INFORMATION")
            console.log(buildingInformation)
            commit('setBuildingInformation', buildingInformation[0])
        })
    },

    addComparisonBuilding({
        dispatch,
        commit,
        state,
    }, buildingId) {
        if (state.comparisonArray.indexOf(buildingId) == -1) {
            console.log("DETECTED NEED CALL")
            console.log(state.buildingInformation)
            if (state.buildingInformation[buildingId] == null) {
                console.log("building dispatched but not loaded! loading")
                dispatch('loadBuildingInformation', buildingId)
            }
            console.log("building loaded")
            commit('addComparisonBuilding', buildingId)
        }
    },

    removeComparisonBuilding({
        commit,
    }, buildingId) {
        commit('removeComparisonBuilding', buildingId)
    },
}

export default {
    state,
    mutations,
    actions
}