/* eslint-disable */
import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default class DatabaseAccessor {
    constructor() {
        this.BASE_URL = 'http://0.0.0.0:8080/v2';
    }
    // retrieve all students belonging to one university
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
}