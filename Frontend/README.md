# Application Frontend
This directory contains the source code for the `vuejs` front end. The core technology stack used is:
* [vue](https://github.com/vuejs/vue)
* [vue-material](https://github.com/vuematerial/vue-material)
* [vue-plotly](vue-plotly)
* [vue-material-kit](https://github.com/creativetimofficial/vue-material-kit)
* [leaflet](https://github.com/Leaflet/Leaflet)
* [Vue2Leaflet](https://github.com/KoRiGaN/Vue2Leaflet)

These components can be seen in the diagram below:

### Development:
Requirements:
1) latest `npm`

To run the development server with hot reloading run:
```
npm install
npm run serve
```

To lint the code run:
```
npm run lint
```

## Production

To run the server in production mode run:

```bash
# building the image
docker-compose build

# starting up the container in detached mode
docker-compose run -d

# viewing the status of the docker containers
docker ps -a
```
Every time the source code is updated for the underlying API you must rebuild the container. This will be added to a CI pipeline at a later point.

### High level overview of interconnection with other layers
<p align="center">  
  <img
   src="https://github.com/SoIidarity/Energy-Consumption-Optimization-Management-Platform/blob/master/Images/System%20architecture-Client%20Perspective%20of%20API%20request.png?raw=true" alt="Date Picker"/>
  <br>
</p>