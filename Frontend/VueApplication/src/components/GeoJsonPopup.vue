<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-50 md-alignment-top-right">
        <div class="md-title"><h2 style="padding-top:0px; margin-top:0px;">Chamber of Mines</h2></div>
        </div>
        <div class="md-layout-item md-size-50 md-alignment-top-right">
          <p style="padding-top:0px; margin-top:10px; float:right;">Average Number of students: 10 <br>
            This is the 5th biggest Consumer</p>
        </div>
    </div >
   
    <div class="md-layout">
      <div class="md-layout-item md-size-50 md-alignment-top-right">
        <md-radio v-model="mode" value="day" style="margin-top:0px">Day</md-radio>
        <md-radio v-model="mode" value="week" style="margin-top:0px">Week</md-radio>  
        <md-radio v-model="mode" value="year" style="margin-top:0px">Year</md-radio>  
        <md-radio v-model="mode" value="histogram" style="margin-top:0px">Histogram</md-radio>
      </div>

      <div class="md-layout-item md-size-30 md-alignment-top-right">
        <md-tooltip md-direction="top">Shift graph campus average</md-tooltip>
        <md-switch v-model="normalized" style="margin-top:0px" v-if="mode!='histogram'">Normalize Average</md-switch>
      </div>

      <div class="md-layout-item md-size-20 md-alignment-top-right">
        <md-tooltip md-direction="top">Add building to comparison</md-tooltip>
        <md-switch v-model="addSetToCompare" style="float:right;" class="md-primary md-alignment-center-right">Compare</md-switch>
      </div>
    </div >
  
    <relative-building-line-chart-day v-if="mode=='day'" style="padding-top:-30px; margin-top:0px;"/>

<relative-building-bar-chart-week :normalizeChart="normalized" v-if="mode=='week'" style="padding-top:-30px; margin-top:0px;"/>    
  
  <relative-building-bar-chart-year v-if="mode=='year'" style="padding-top:-30px; margin-top:0px;"/>

<relative-building-histogram v-if="mode=='histogram'" style="padding-top:-30px; margin-top:0px;"/>
        
      <div v-observe-visibility="visibilityChanged"></div>

  </div>
</template>

<script>
import RelativeBuildingLineChartDay from "./RelativeBuildingLineChartDay";
import RelativeBuildingBarChartWeek from "./RelativeBuildingBarChartWeek";
import RelativeBuildingBarChartYear from "./RelativeBuildingBarChartYear";
import RelativeBuildingHistogram from "./RelativeBuildingHistogram";

export default {
  name: "GeoJson2Popup",
  components: {
    RelativeBuildingLineChartDay,
    RelativeBuildingBarChartWeek,
    RelativeBuildingBarChartYear,
    RelativeBuildingHistogram
  },
  data: function() {
    return {
      mode: "year",
      addSetToCompare: false,
      isVisible: false,
      normalized: false
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