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
    </div >
  
        <relative-building-bar-chart style="padding-top:-50px; margin-top:0px;"/>
        
        <div class="md-layout">
      <div class="md-layout-item md-size-50 md-alignment-top-right">
        <md-checkbox v-model="mode" value="day">Day</md-checkbox>
        <md-checkbox v-model="mode" value="week">Week</md-checkbox>  
        <md-checkbox v-model="mode" value="year">Year</md-checkbox>  
        <md-checkbox v-model="mode" value="histogram">Histogram</md-checkbox>  
        </div>
        <div class="md-layout-item md-size-50 md-alignment-top-right">
          <md-switch v-model="addSetToCompare" class="md-primary">Primary</md-switch>
        </div>
    </div >

        
    <!-- <relative-building-bar-chart/> -->

      <div ref="test" v-observe-visibility="visibilityChanged">Hello world!</div>

  </div>
</template>

<script>
import RelativeBuildingBarChart from "./RelativeBuildingBarChart";

export default {
  name: "GeoJson2Popup",
  components: {
    RelativeBuildingBarChart
  },
  data: function() {
    return {
      mode: "year",
      addSetToCompare: false,
      isVisible: false
    };
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
    },
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      console.log(entry);
    }
  },
  mounted() {
    console.log("MOUNTED");
  }
};
</script>