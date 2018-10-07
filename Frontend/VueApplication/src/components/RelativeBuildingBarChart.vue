<template>
    <vue-plotly :data="data" :layout="layout" :options="options"/>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

export default {
  components: {
    VuePlotly
  },
  data: function() {
    return {
      data: [{ x: [1, 3], y: [2, 4] }],
      layout: {
        title: "Responsive to window's size!",
        font: { size: 18 },
        showLink: false,
        displayModeBar: false
      },
      options: {
        responsive: true,
        showLink: false
      }
    };
  }
};
</script>

