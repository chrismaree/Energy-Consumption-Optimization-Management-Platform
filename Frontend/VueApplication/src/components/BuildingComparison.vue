<template>
    <div>
    <div class="md-layout" style="padding-top:0px; margin-top:0px; padding-left:20px">
      <div class="md-layout-item md-size-20">
        <p>Plotted Values
        <md-radio v-model="chartRange" value="Last" style="padding-left:20px; margin-top:0px">
          <md-tooltip md-direction="top">Most recent day/week/year</md-tooltip>Last</md-radio>
        <md-radio v-model="chartRange" value="Average" style="margin-top:0px"><md-tooltip md-direction="top">
          Highest past day/week/year</md-tooltip>Average</md-radio>  
        </p>
      </div>
      <div class="md-layout-item md-size-20">
        <p>Charth Type
        <md-radio v-model="chartType" value="Area" style="padding-left:20px; margin-top:0px">
          Filled Area Plot</md-radio>
        <md-radio v-model="chartType" value="Line" style="margin-top:0px">Line Plot</md-radio>  
        </p>
      </div>
      
      <div class="md-layout-item md-size-40">
              
    
        <md-chip v-for="building in buildingNameChips" @click="removeChip(building['buildingIndex'])" class="md-primary">
                      <md-tooltip md-direction="top">Click to remove</md-tooltip>
                {{building['buildingName']}}
                </md-chip>
      </div>
      <div class="md-layout-item md-size-20" style="padding-right:50px">
        <md-field>
          <label for="movie">Add another building to compare</label>
          <md-select v-model="movie" name="movie" id="movie">
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
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
      movie: "godfather",
      chartType: "Area",
      chartRange: "Average"
    };
  },
  methods: {
    removeChip(buildingId) {
      console.log("CHIPREMOVED", buildingId);
      store.dispatch("removeComparisonBuilding", buildingId);
    }
  },
  computed: {
    buildingNameChips() {
      let buildingNameChips = [];
      store.state.databaseStore.comparisonArray.forEach(function(
        buildingIndex
      ) {
        buildingNameChips.push({
          buildingIndex: buildingIndex,
          buildingName:
            store.state.databaseStore.buildingInformation[buildingIndex][
              "BuildingName"
            ]
        });
      });
      console.log("CHIPS");
      console.log(buildingNameChips);
      return buildingNameChips;
    }
  }
};
</script>

<style>
.btn {
  border: none;
  background-color: inherit;
  padding: 0 !important;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

/* On mouse-over */
.btn:hover {
  background: #eee;
}

.success {
  color: green;
}
.info {
  color: dodgerblue;
}
.warning {
  color: orange;
}
.danger {
  color: red;
}
.default {
  color: black;
}
</style>
