<template>
    <div>
    <vue-plotly :data="data" :layout="layout" :options="options" :autoResize="true"/>
    </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import store from "./../store/";

export default {
  name: "RelativeBuildingBarChartMonth",
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
      console.log(
        Object.keys(
          store.state.databaseStore.buildingInformation.ChartInformation
            .WeekInformation.AverageWeek
        )
      );
      let charData = [
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
          x: Object.keys(
            store.state.databaseStore.campusInfo.AveragePastWeek
          ),
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
        // {
        //   x: [
        //     "Sunday",
        //     "Monday",
        //     "Tuesday",
        //     "Wednesday",
        //     "Thursday",
        //     "Friday",
        //     "Saturday"
        //   ],
        //   y: Object.values(store.state.databaseStore.buildingInformation.ChartInformation.WeekInformation.CampusAverageWeekNormalized),
        //   type: "line",
        //   mode: "lines",
        //   name: "Normalized Campus Average",
        //   visible: false,
        //   line: {
        //     dash: "dashdot",
        //     width: 4
        //   }
        // }
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

