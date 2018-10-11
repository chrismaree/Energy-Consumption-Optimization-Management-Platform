<template>
    <div>
    <vue-plotly :data="data" :layout="layout" :options="options" :autoResize="true"/>
    </div>
</template>
<script>
import VuePlotly from "@statnett/vue-plotly";

import store from "@/store/";

export default {
  name: "RelativeBuildingBarChartDay",
  components: {
    VuePlotly
  },
  props: {
    normalizeChart: {
      type: Boolean,
      deafault: true
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
        title: "Day Consumption Vs Normalized Average",
        // xaxis: { title: "Day Day" },
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
      console.log(
        Object.keys(
          store.state.databaseStore.buildingInformation.ChartInformation
            .DayInformation.AverageDay
        )
      );
      let charData = [
        {
          x: Object.keys(
            store.state.databaseStore.buildingInformation.ChartInformation
              .DayInformation.LastDay
          ),
          y: Object.values(
            store.state.databaseStore.buildingInformation.ChartInformation
              .DayInformation.LastDay
          ),
          type: "bar",
          name: "Last Day",
          marker: {
            color: "rgb(49,130,189)",
            opacity: 0.7
          }
        },
        {
          x: Object.keys(
            store.state.databaseStore.buildingInformation.ChartInformation
              .DayInformation.AverageDay
          ),
          y: Object.values(
            store.state.databaseStore.buildingInformation.ChartInformation
              .DayInformation.AverageDay
          ),
          type: "bar",
          name: "Average Day",
          marker: {
            color: "rgb(204,204,204)",
            opacity: 0.5
          }
        },
        {
          x: Object.keys(store.state.databaseStore.campusInfo.AveragePastDay),
          y: Object.values(store.state.databaseStore.campusInfo.AveragePastDay),
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
      console.log(this.normalizeChart);
      if (this.normalizeChart) {
        charData[2].visible = false;
        charData[3].visible = true;
        this.$emit("myEvent");
      }
      return charData;
    }
  }
};
</script>

