<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      
      <div id="map-wrap" style="height: 500px; width: 1000px">
        <no-ssr>
          <l-map :zoom=13 :center="center">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
              <l-geo-json
                :geojson="bicycleAndCampus.geojson"
                :options="bicycleAndCampus.options"/>

          </l-map>
        </no-ssr>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue';

import { default as data } from '../assets/geojson/sample-geojson.js'

import PopupContent from '~/components/MapPopup'

function onEachFeature (feature, layer) {
  let PopupCont = Vue.extend(PopupContent);
  let popup = new PopupCont({ propsData: { type: feature.geometry.type, text: feature.properties.popupContent } });
  layer.bindPopup(popup.$mount().$el);



  console.log("ON EACH")
  // console.log(content)
  // console.log(feature)
  // console.log(layer)
}

export default {
  components: {},

  data() {
    return {
      zoom: 13,
      center: [39.74739, -105],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: [47.41322, -1.219482],
      currentZoom: 13,
      showParagraph: false,
      bicycleAndCampus: {
        geojson: [data.campus],
        options: {
          style: function(feature) {
            return feature.properties && feature.properties.style
          },
          onEachFeature: onEachFeature,
        }
      }
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    showLongTooltip() {
      this.showParagraph = !this.showParagraph
    }
  },

  mounted() {
    this.$store.commit('fullScreenOff')
  }
}
</script>

<style>
</style>
