<template>
    <div>
    <div class="md-layout" style="padding-top:0px; margin-top:0px; padding-left:20px">
      <div class="md-layout-item md-size-25">
        <p>Plotted Values
        <md-radio v-model="chartRange" value="Last" style="padding-left:20px; margin-top:0px">
          <md-tooltip md-direction="top">Most Recent day/week/year</md-tooltip>Last</md-radio>
        <md-radio v-model="chartRange" value="Average" style="margin-top:0px"><md-tooltip md-direction="top">
          Highest past day/week/year</md-tooltip>Average</md-radio>  
        </p>
      </div>
      <div class="md-layout-item md-size-25">
        <p>Charth Type
        <md-radio v-model="chartType" value="Area" style="padding-left:20px; margin-top:0px">
          Filled Area Plot</md-radio>
        <md-radio v-model="chartType" value="Line" style="margin-top:0px">Line Plot</md-radio>  
        </p>
      </div>
      
  
      </div>
    <BuildingComparisonLineChart :chartRange="chartRange" :chartType="chartType"/>
    </div>
</template>

<script>
import BuildingComparisonLineChart from "@/components/charts/BuildingComparisonLineChart";

import store from "@/store/";

export default {
  name: "BuildingComparison",
  components: {
    BuildingComparisonLineChart
  },
  props: {},
  data: function() {
    return {
      chartType: "Area",
      chartRange: "Week"
    };
  },
  computed: {}
};
</script>

