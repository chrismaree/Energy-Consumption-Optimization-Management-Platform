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
  mounted() {
    for (var i = 0; i < 500; i++) {
      this.x0[i] = Math.random();
      this.x1[i] = Math.random() + 1;
    }
  },
  data: function() {
    return {
      x0: [],
      x1: [],
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      },
      data: [
        {
          x: this.x0,
          histnorm: "count",
          name: "control",
          autobinx: false,
          xbins: {
            start: -3.2,
            end: 2.8,
            size: 0.2
          },
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
          x: this.x1,
          name: "experimental",
          autobinx: false,
          xbins: {
            start: -1.8,
            end: 4.2,
            size: 0.2
          },
          marker: { color: "rgb(255, 217, 102)" },
          opacity: 0.75,
          type: "histogram"
        }
      ],

      layout: {
        title: "Sampled Results",
        xaxis: { title: "Value" },
        yaxis: { title: "Count" },
        barmode: "overlay",
        bargap: 0.25,
        bargroupgap: 0.3
      }
    };
  }
};
</script>

