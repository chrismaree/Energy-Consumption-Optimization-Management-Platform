<template>
    <div>    
      <vue-plotly :data="data[chartRange]" :layout="layout" :options="options" :autoResize="true"/>
    </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import store from "@/store/";

export default {
  name: "RelativeBuildingBarChart",
  components: {
    VuePlotly
  },
  props: {
    chartRange: {
      type: String,
      deafault: "Week"
    },
    buildingId: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      },
      // data:

      layout: {
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
        title: "Week Consumption Vs Normalized Average",
        // xaxis: { title: "Week Day" },
        yaxis: { title: "Energy Consumed (kW)" },
        xaxis: {
          tickangle: -45
        },
        barmode: "group"
      }
    };
  },
  computed: {
    data() {
      let returnedPlots = { Day: [], Week: [], Year: [] };
      let buildingId = this.buildingId;
      let buildingInformation =
        store.state.databaseStore.selectedBuildingInformation;
      Object.keys(returnedPlots).forEach(function(plotType) {
        returnedPlots[plotType] = [
          {
            x: Object.keys(
              buildingInformation.ChartInformation[plotType + "Information"][
                "Last" + plotType
              ]
            ),
            y: Object.values(
              buildingInformation.ChartInformation[plotType + "Information"][
                "Last" + plotType
              ]
            ),
            type: "bar",
            name: "Last Week",
            marker: {
              color: "rgb(49,130,189)",
              opacity: 0.7
            }
          },
          {
            x: Object.keys(
              buildingInformation.ChartInformation[plotType + "Information"][
                "Average" + plotType
              ]
            ),
            y: Object.values(
              buildingInformation.ChartInformation[plotType + "Information"][
                "Average" + plotType
              ]
            ),
            type: "bar",
            name: "Average Week",
            marker: {
              color: "rgb(204,204,204)",
              opacity: 0.5
            }
          },
          {
            x: Object.keys(
              store.state.databaseStore.campusInfo["AveragePast" + plotType]
            ),
            y: Object.values(
              store.state.databaseStore.campusInfo["AveragePast" + plotType]
            ),
            type: "line",
            mode: "lines",
            name: "Campus Average",
            visible: true,
            line: {
              dash: "dashdot",
              width: 4
            }
          }
        ];
      });
      return returnedPlots;
    }
  }
};
</script>

