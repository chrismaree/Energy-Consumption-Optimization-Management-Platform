<template>
    <div>
    
    <div v-if="$store.state.databaseStore.comparisonArray.length==0" class="md-layout">
      <md-empty-state
      md-icon="map"
      md-label="No buildings selected"
      md-description="Choose a building from the dropdown list or by clicking on a building in the heatmap then clicking compare">
    </md-empty-state>
    </div>
    
    <div v-if="$store.state.databaseStore.comparisonArray.length>0" class="md-layout">
      <div class="md-layout-item md-size-32 md-alignment-top-right">
      <vue-plotly :data="data2['Day']" :layout="layout['Day']" :options="options" :autoResize="true"/>
      </div>
      <div class="md-layout-item md-size-32 md-alignment-top-right">
      <vue-plotly :data="data2['Week']" :layout="layout['Week']" :options="options" :autoResize="true"/>
      </div>
      <div class="md-layout-item md-size-32 md-alignment-top-right">
      <vue-plotly :data="data2['Year']" :layout="layout['Year']" :options="options" :autoResize="true"/>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-alignment-top-right">
    </div>
    </div>
    </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import store from "@/store/";

export default {
  name: "BuildingComparisonLineChart",
  components: {
    VuePlotly
  },
  props: {
    chartRange: {
      type: String,
      deafault: "week"
    },
    chartType: {
      type: String,
      deafault: "Area"
    }
  },
  data: function() {
    return {
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      }
    };
  },
  computed: {
    data2() {
      // let plotsToDraw = ["Day", "Week", "Year"];
      let returnedPlots = { Day: [], Week: [], Year: [] };
      let colourArray = ["#673AB7", "#F44336", "#8bC43A", "#03A9F4", "#009688"];
      let chartType = this.chartType;
      let chartRange = this.chartRange;
      try {
        Object.keys(returnedPlots).forEach(function(plotType) {
          for (
            let index = 0;
            index < store.state.databaseStore.comparisonArray.length;
            index++
          ) {
            let buildingIndex =
              store.state.databaseStore.comparisonArray[index];
            console.log(buildingIndex);
            let baseChartEntity = {
              x: Object.keys(
                store.state.databaseStore.buildingInformation[buildingIndex]
                  .ChartInformation[plotType + "Information"][
                  chartRange + plotType
                ]
              ),
              y: Object.values(
                store.state.databaseStore.buildingInformation[buildingIndex]
                  .ChartInformation[plotType + "Information"][
                  chartRange + plotType
                ]
              ),
              name:
                store.state.databaseStore.buildingInformation[buildingIndex][
                  "BuildingName"
                ],
              marker: {
                color: colourArray[index],
                opacity: 0.7
              }
            };
            if (chartType == "Area") {
              baseChartEntity["stackgroup"] = "one";
            }
            returnedPlots[plotType].push(baseChartEntity);
          }
        });
      } catch (e) {}
      return returnedPlots;
    },
    layout() {
      let chartType = this.chartType;
      // layout.title = "Past " + this.chartRange + " " + this.chartType;
      let returnedLayouts = { Day: "", Week: "", Year: "" };
      let chartRange = this.chartRange;
      Object.keys(returnedLayouts).forEach(function(plotType) {
        let chartTitle =
          chartRange + " " + plotType + " " + chartType + " Plot";
        let chartLayout = {
          legend: {
            x: 0,
            y: 1,
            traceorder: "normal",
            font: {
              family: "sans-serif",
              size: 12,
              color: "#000"
            }
          },
          margin: {
            l: 45,
            r: 0,
            b: 60,
            t: 50,
            pad: 5
          },
          title: chartTitle,
          // xaxis: { title: "Week Day" },
          yaxis: { title: "Energy Consumed (kW)" },
          xaxis: {
            tickangle: -45
          },
          barmode: "group"
        };
        returnedLayouts[plotType] = chartLayout;
      });
      return returnedLayouts;
    }
  }
};
</script>

<style>
</style>
