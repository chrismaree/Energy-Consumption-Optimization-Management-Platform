<template>
  <div>
    <p>
      I started out as a GeoJSON {{ type }}, but now I'm a Leaflet vector!
    </p>
    {{ text }}
    <md-button @click="printScreen" class="md-primary">Regular</md-button>
  </div>
</template>

<script>
export default {
  name: 'GeoJson2Popup',
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods:{
    printScreen(){
      console.log("CLICKED")
      console.log(this.id)
      console.log("CLICKED1")
    }
  },
};
</script>