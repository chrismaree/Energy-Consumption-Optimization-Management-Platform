<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-50 md-alignment-top-right">
        <div class="md-title"><h2 style="padding-top:0px; margin-top:0px;">Chamber of Mines</h2></div>
        </div>
        <div class="md-layout-item md-size-50 md-alignment-top-right">
          <p style="padding-top:0px; margin-top:0px; float:right;">Average Number of students: 10 <br>
            This is the 5th biggest Consumer</p>
        </div>
    </div>
    
    <relative-building-bar-chart/>
  </div>
</template>

<script>
import RelativeBuildingBarChart from "./RelativeBuildingBarChart";

export default {
  name: "GeoJson2Popup",
  components: {
    RelativeBuildingBarChart
  },
  props: {
    id: {
      type: String,
      default: ""
    },
    buildingName: {
      type: String,
      default: ""
    },
    studentCount: {
      type: String,
      default: ""
    }
  },
  methods: {
    printScreen() {
      console.log("CLICKED");
      console.log(this.id);
      console.log("CLICKED1");
    }
  }
};
</script>