<template>
    <div>
    <div class="md-layout">
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
    
    {{chartRange}}{{chartType}}
    
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
      let chartType = this.chartType;
      let chartRange = this.chartRange;
      Object.keys(returnedPlots).forEach(function(plotType) {
        store.state.databaseStore.comparisonArray.forEach(function(
          buildingIndex
        ) {
          console.log("TOP", buildingIndex, chartType, plotType, chartRange);
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
              color: "rgb(49,130,189)",
              opacity: 0.7
            }
          };
          if (chartType == "Area") {
            console.log("XXXX")
            baseChartEntity["stackgroup"] = "one";
          }
          console.log("BASE ENTRY");
          console.log(baseChartEntity);
          returnedPlots[plotType].push(baseChartEntity);
        });
      });
      return returnedPlots;
    },
    layout() {
      let chartType = this.chartType;
      // layout.title = "Past " + this.chartRange + " " + this.chartType;
      let returnedLayouts = { Day: "", Week: "", Year: "" };
      console.log(returnedLayouts);
      Object.keys(returnedLayouts).forEach(function(plotType) {
        console.log(plotType);
        let chartTitle = "Past " + plotType + " " + chartType;
        let chartLayout = {
          legend: {
            x: 0,
            y: 0,
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
        console.log(chartLayout);
      });
      console.log("LayoutSSS");
      console.log(returnedLayouts);
      return returnedLayouts;
    }
  }
};
</script>

<style>
</style>
