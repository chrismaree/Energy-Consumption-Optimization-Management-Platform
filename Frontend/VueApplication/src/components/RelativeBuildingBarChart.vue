<template>
    <div>
    <vue-plotly :data="data" :layout="layout" :options="options" :autoResize="false"/>
    </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

export default {
  name: "RelativeBuildingBarChart",
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
          x: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
          type: "bar",
          name: "Chamber Of Mines",
          marker: {
            color: "rgb(49,130,189)",
            opacity: 0.7
          }
        },

        {
          x: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
          type: "bar",
          name: "Normalized Average",
          marker: {
            color: "rgb(204,204,204)",
            opacity: 0.5
          }
        }
      ],

      layout: {
        margin: {
          l: 20,
          r: 20,
          b: 50,
          t: 50,
          pad: 5
        },
        title: "Yearly Consumption Vs Normalized Average",
        xaxis: {
          tickangle: -45
        },
        barmode: "group"
      }
    };
  }
};
</script>

