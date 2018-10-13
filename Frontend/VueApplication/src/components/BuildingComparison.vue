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
          <md-tooltip md-direction="top">Cumulative, stacked plot</md-tooltip>
          Filled Area Plot</md-radio>
        <md-radio v-model="chartType" value="Line" style="margin-top:0px">
          Line Plot
          <md-tooltip md-direction="top">Relative, comparative plot</md-tooltip>
          </md-radio>  
        </p>
      </div>
      <div class="md-layout-item md-size-15" style="padding-right:30px">
        <md-tooltip md-direction="top">Add any building on campus</md-tooltip>
        <md-field>
          <label for="movie">Add another building to compare</label>
          <md-select v-model="addedBuilding" name="movie" id="movie">
            <md-option v-for="building in $store.state.databaseStore.buildingNames" :value="building['BuildingId']">{{building['buildingName']}}</md-option>
          </md-select>
        </md-field>
      </div>
      
      <div class="md-layout-item md-size-45">
        <md-chip v-if="buildingNameChips" v-for="building in buildingNameChips" :class="building['buildingColour']" @click="removeChip(building['buildingId'])">
                      <md-tooltip md-direction="top">Click to remove</md-tooltip>
                {{building['buildingName']}}
                </md-chip>
      </div>

      
      
      </div>
    <BuildingComparisonLineChart :chartRange="chartRange" :chartType="chartType"/>
    <!-- {{addBuildingToSet}} -->
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
      addedBuilding: "",
      chartType: "Area",
      chartRange: "Average"
    };
  },
  methods: {
    addBuilding(buildingId) {
      console.log(buildingId);
      // store.dispatch("addComparisonBuilding",buildingId)
    },
    removeChip(buildingId) {
      console.log("CHIPREMOVED", buildingId);
      store.dispatch("removeComparisonBuilding", buildingId);
    }
  },
  computed: {
    addBuildingToSet() {
      console.log(this.addedBuilding);
      if (this.addedBuilding != "undefined" && this.addedBuilding && this.addedBuilding!="") {
        console.log("DISPATCHED")
        store.dispatch("addComparisonBuilding", this.addedBuilding);
      }
    },
    buildingNameChips() {
      let colours = ["#673AB7", "#F44336", "#8bC43A", "#03A9F4", "#009688"];
      let colourClass = ["md-primary", "md-accent"];
      let buildingNameChips = [];
      try {
        for (
          let index = 0;
          index < store.state.databaseStore.comparisonArray.length;
          index++
        ) {
          let buildingIndex = store.state.databaseStore.comparisonArray[index];

          buildingNameChips.push({
            buildingIndex: buildingIndex,
            buildingName:
              store.state.databaseStore.buildingInformation[buildingIndex][
                "BuildingName"
              ],
            buildingColour: "graph" + index,
            buildingId: store.state.databaseStore.buildingInformation[buildingIndex][
                "BuildingId"
              ],
          });
        }
      } catch (e) {}
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

.graph0 {
  background-color: #673ab7 !important;
  color: white !important;
}

.graph1 {
  background: #f44336 !important;
  color: whti !important;
}

.graph2 {
  background: #8bc43a !important;
  color: black !important;
}

.graph3 {
  background: #03a9f4 !important;
  color: white !important;
}

.graph4 {
  background: #009688 !important;
  color: white !important;
}
</style>
