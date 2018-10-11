<template>
  <div>
      <div class="md-layout" style="padding-top:0px; margin-top:0px; padding-left:20px">
      <div class="md-layout-item md-size-25">
        <p>Plotted Values
        <md-radio v-model="range" value="Average" style="padding-left:20px; margin-top:0px">
          <md-tooltip md-direction="top">Average day/week/year</md-tooltip>Average</md-radio>
        <md-radio v-model="range" value="Maximum" style="margin-top:0px"><md-tooltip md-direction="top">
          Highest past day/week/year</md-tooltip>Maximum</md-radio>  
        </p>
      </div>
      <div class="md-layout-item md-size-30">
        <md-tooltip md-direction="top">Preiod of time</md-tooltip>
        <p>Heatmap Period
        <md-radio v-model="mode" value="Day" style="padding-left:20px; margin-top:0px">Day</md-radio>
        <md-radio v-model="mode" value="Week" style="margin-top:0px">Week</md-radio>  
        <md-radio v-model="mode" value="Year" style="margin-top:0px">Year</md-radio>  
        </p>
      </div>
  
      </div>
      <l-map
        :zoom="zoom"
        :center="center"
        style="height: 900px; width: 100%"
        :options="options">
        <l-tile-layer
          :url="url"
          :attribution="attribution"/>
        <!-- <l-geo-json
          :geojson="bus.geojson"
          :options="bus.options"/> -->
        <l-geo-json
          :geojson="campusData.geojson"
          :options="campusData.options"
          
          />
      </l-map>
    </div>
</template>

<script>
import Vue from "vue";
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import PopupContent from "./GeoJsonPopup";
// var baseballIcon = L.icon({
//   iconUrl: 'static/images/baseball-marker.png',
//   iconSize: [32, 37],
//   iconAnchor: [16, 37],
//   popupAnchor: [0, -28]
// });
function onEachFeature(feature, layer) {
  let PopupCont = Vue.extend(PopupContent);
  let popup = new PopupCont({
    propsData: {
      buildingId: feature.properties.buildingId,
      buildingName: feature.properties.buildingName
    }
  });
  layer.bindPopup(popup.$mount().$el, {
    maxWidth: "auto",
    maxHeight: 1000,
    autoPan: true
  });
}
export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  methods: {},
  mounted() {
    this.$store.dispatch("loadMapGeoJson");
  },
  data() {
    // 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=
    return {
      campus: "MainCampus",
      range: "Average",
      mode: "Week",
      zoom: 16.5,
      center: [-26.1893, 28.0266],
      url:
        "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2hyaXNtYXJlZSIsImEiOiJjam1sdW5tMHAwOHlxM2tudWJtMGVnOXltIn0.FdRDSOeZfQ2cQEeEzHwyvw",
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      options: {
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false
      }
      // bus: {
      //   geojson: data.freeBus,
      //   options: {
      //     filter: function(feature, layer) {
      //       if (feature.properties) {
      //         return feature.properties.underConstruction !== undefined
      //           ? !feature.properties.underConstruction
      //           : true;
      //       }
      //       return false;
      //     },
      //     onEachFeature: onEachFeature
      //   }
      // },
      // coors: {
      //   geojson: data.coorsField,
      //   options: {
      //     pointToLayer: function (feature, latlng) {
      //       return L.marker(latlng, {icon: baseballIcon});
      //     },
      //     onEachFeature: onEachFeature
      //   }
      // },
    };
  },
  computed: {
    campusData() {
      // console.log(this.mode)
      let chartMode = this.mode + "Style_" + this.range;
      console.log(chartMode);
      return {
        geojson: [this.$store.state.databaseStore.mapGeoJson],
        options: {
          style: function(feature) {
            return feature.properties && feature.properties[chartMode];
          },
          onEachFeature: onEachFeature
        }
      };
    }
  }
};
</script>