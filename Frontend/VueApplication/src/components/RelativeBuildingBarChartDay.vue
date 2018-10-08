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
  data: function() {
    return {
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      },
      data: [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 3, 2, 3, 1],
          mode: "lines",
          name: "Solid",
          line: {
            dash: "solid",
            width: 4
          }
        },

        {
          x: [1, 2, 3, 4, 5],
          y: [6, 8, 7, 8, 6],
          mode: "lines",
          name: "dashdot",
          line: {
            dash: "dashdot",
            width: 4
          }
        }
      ],

      layout: {
        title: "Line Dash",
        xaxis: {
          range: [0.75, 5.25],
          autorange: false
        },
        yaxis: {
          range: [0, 18.5],
          autorange: false
        },
        legend: {
          y: 0.5,
          traceorder: "reversed",
          font: {
            size: 16
          }
        }
      }
    };
  }
};
</script>

