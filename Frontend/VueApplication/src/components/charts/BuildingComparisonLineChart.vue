<template>
    <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-alignment-top-right">
      <vue-plotly :data="data2['Day']" :layout="layout" :options="options" :autoResize="true"/>
      </div>
      <div class="md-layout-item md-size-33 md-alignment-top-right">
      <vue-plotly :data="data2['Week']" :layout="layout" :options="options" :autoResize="true"/>
      </div>
      <div class="md-layout-item md-size-33 md-alignment-top-right">
      <vue-plotly :data="data2['Year']" :layout="layout" :options="options" :autoResize="true"/>
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
    data2() {
      // let plotsToDraw = ["Day", "Week", "Year"];
      let returnedPlots = {"Day":{},"Week":{},"Year":{}}
      Object.keys(returnedPlots).forEach(function(plotType){
        console.log(plotType)
        returnedPlots[plotType]= [
        {
          x: Object.keys(
            store.state.databaseStore.buildingInformation.ChartInformation
              .WeekInformation.LastWeek
          ),
          y: Object.values(
            store.state.databaseStore.buildingInformation.ChartInformation
              .WeekInformation.LastWeek
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
            store.state.databaseStore.buildingInformation.ChartInformation
              .WeekInformation.AverageWeek
          ),
          y: Object.values(
            store.state.databaseStore.buildingInformation.ChartInformation
              .WeekInformation.AverageWeek
          ),
          type: "bar",
          name: "Average Week",
          marker: {
            color: "rgb(204,204,204)",
            opacity: 0.5
          }
        },
        {
          x: Object.keys(store.state.databaseStore.campusInfo.AveragePastWeek),
          y: Object.values(
            store.state.databaseStore.campusInfo.AveragePastWeek
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
        
      })
      return returnedPlots
    },
    data() {
      // let charData = 
      // return { Day: charData };
    }
  }
};
</script>

