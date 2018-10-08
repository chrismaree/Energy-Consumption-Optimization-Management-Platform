<template>
    <div>
    <vue-plotly :data="data" :layout="layout" :options="options" :autoResize="false"/>
    <!-- {{data}} -->
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

      layout: {
        title: "Sampled Results",
        xaxis: { title: "Value" },
        yaxis: { title: "Count" },
        barmode: "stack",
        bargap: 0.25,
        bargroupgap: 0.3
      }
    };
  },
  computed: {
    data() {
      return [
        {
          x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          histnorm: "count",
          name: "control",
          autobinx: false,
          // xbins: {
          //   start: -3.2,
          //   end: 2.8,
          //   size: 0.2
          // },
          marker: {
            color: "fuchsia",
            line: {
              color: "grey",
              width: 0
            },
            opacity: 0.75
          },
          type: "histogram"
        },

        {
          x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          name: "experimental",
          autobinx: false,
          // xbins: {
          //   start: -1.8,
          //   end: 4.2,
          //   size: 0.2
          // },
          marker: { color: "rgb(255, 217, 102)" },
          opacity: 0.75,
          type: "histogram"
        }
      ];
    }
  }
};
</script>

