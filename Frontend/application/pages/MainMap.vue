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
          <l-map :zoom=13 :center="[47.413220, -1.219482]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
          </l-map>
        </no-ssr>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  
  },

  data() {
    return {
      
    }
  },
  methods: {
    
  },

  mounted() {
    this.$store.commit('fullScreenOff')
  }
}
</script>

<style>

</style>
