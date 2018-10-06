<template>
  <div>
    <div>
      <md-button @click="Resize" class="md-primary">CLICKED</md-button>
      <l-map
        :zoom="zoom"
        :center="center"
        style="height: 800px; width: 100%">
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
      type: feature.geometry.type,
      text: feature.properties.popupContent,
      id: feature.properties.id
    }
  });
  layer.bindPopup(popup.$mount().$el);
}
export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  methods: {
    Resize() {
      console.log("Button clicked");
      this.$store.dispatch("loadMapGeoJson");
    }
  },
  data() {
    // 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=
    return {
      zoom: 16.5,
      center: [-26.1913, 28.0266],
      url:
        "https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2hyaXNtYXJlZSIsImEiOiJjam1sdW5tMHAwOHlxM2tudWJtMGVnOXltIn0.FdRDSOeZfQ2cQEeEzHwyvw",
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>'
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
      return {
        geojson: [this.$store.state.databaseStore.mapGeoJson],
        options: {
          style: function(feature) {
            return feature.properties && feature.properties.style;
          },
          onEachFeature: onEachFeature
        }
      };
    }
  }
};
</script>