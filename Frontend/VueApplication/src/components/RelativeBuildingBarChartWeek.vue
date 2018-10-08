<template>
    <div>
    <vue-plotly :data="data" :layout="layout" :options="options" :autoResize="false"/>
    </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

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
        title: "Yearly Consumption Vs Normalized Average",
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
      let charData = [
        {
          x: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          y: [20, 14, 25, 16, 18, 22, 19],
          type: "bar",
          name: "Last Week",
          marker: {
            color: "rgb(49,130,189)",
            opacity: 0.7
          }
        },

        {
          x: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          y: [19, 14, 22, 14, 16, 19, 15],
          type: "bar",
          name: "Average Week",
          marker: {
            color: "rgb(204,204,204)",
            opacity: 0.5
          }
        },
        {
          x: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          y: [28, 22, 30, 28, 28, 31, 22],
          type: "line",
          mode: "lines",
          name: "Campus Average",
          visible: true,
          line: {
            dash: "dashdot",
            width: 4
          }
        },
        {
          x: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          y: [25, 19, 25, 26, 26, 28, 18],
          type: "line",
          mode: "lines",
          name: "Normalized Campus Average",
          visible: false,
          line: {
            dash: "dashdot",
            width: 4
          }
        }
      ];
      console.log(this.normalizeChart);
      if (this.normalizeChart) {
        charData[2].visible=false
        charData[3].visible=true
        this.$emit('myEvent')

      }
      return charData
    }
  }
};
</script>

