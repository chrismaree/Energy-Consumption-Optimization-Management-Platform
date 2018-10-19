/* eslint-disable */
import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default class DatabaseAccessor {
    constructor() {
        this.BASE_URL = 'http://witsecop.co.za:8080/v2';
    }

    getGeoJson(university_id) {
        university_id = 0
        let url = `${this.BASE_URL}/geojson/${university_id}`
        return axios.get(url, {
            // headers: {
            //     Authorization: "Bearer " + access_token
            // }
        }).then(response => {
            console.log(response.data)
            return response.data;
        });
    }

    getCampusInfo(university_id) {
        university_id = 0
        let url = `${this.BASE_URL}/getAllCampus`
        return axios.get(url, {
            // headers: {
            //     Authorization: "Bearer " + access_token
            // }
        }).then(response => {
            console.log(response.data)
            return response.data;
        });
    }

    getBuildingInformation(building_id) {
        let url = `${this.BASE_URL}/buildingInformation/${building_id}`

        return axios.get(url, {
            // headers: {
            //     Authorization: "Bearer " + access_token
            // }
        }).then(response => {
            console.log("getBuildingInformation Responce")
            console.log(response.data)
            return response.data;
        });
    }

    getAllBuildingNames(){
        let url = `${this.BASE_URL}/getAllBuildingNames`

        return axios.get(url, {
            // headers: {
            //     Authorization: "Bearer " + access_token
            // }
        }).then(response => {
            console.log("Building Names Responce")
            console.log(response.data)
            return response.data;
        });
    }
}