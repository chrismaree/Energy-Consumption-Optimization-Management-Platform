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

       <div>
          <bar-chart :data="barData" :options="{ maintainAspectRatio: false }" />
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'

import { default as data } from '../assets/geojson/sample-geojson.js'

import PopupContent from '~/components/MapPopup'
import BarChart from '~/components/bar-chart'


function onEachFeature(feature, layer) {
  let PopupCont = Vue.extend(PopupContent)
  let popup = new PopupCont({
    propsData: {
      type: feature.geometry.type,
      text: feature.properties.popupContent
    }
  })
  layer.bindPopup(popup.$mount().$el)

  console.log('ON EACH')
  // console.log(content)
  // console.log(feature)
  // console.log(layer)
}

export default {
  components: {
    BarChart
  },

  data() {
    return {
      showLine: false,
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
          onEachFeature: onEachFeature
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
    this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  asyncData() {
    const barData = {
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850'
          ],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    }
    const options = {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
    return { barData, options }
  }
}
</script>

<style scoped>
.bar-chart {
  position: fixed;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
}
</style>
