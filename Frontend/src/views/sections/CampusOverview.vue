<template>
  <div class="wrapper" id="map">
     <div class="main main-raised" style="margin-top:50px">
      <md-card class="md-elevation-24" style="margin-bottom:0">
     <div class="md-layout" style="padding-top:0">
            <div class="md-layout-item md-size-45 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Campus heat map</h2>
              <h5 class="description">View the consumption of all buildings on campus over different time periods. Identify large consumers by their colour. Click on a building to find out more information about its consumption.</h5>
            </div>
          </div>
            <MainMap/>
      </md-card>
     </div>
     <div class="main main-raised" style="margin-top:50px" id="compare">
      <md-card class="md-elevation-24" style="margin-bottom:0px">
      <div class="md-layout" style="padding-top:0">
            <div class="md-layout-item md-size-45 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Building comparison</h2>
              <h5 class="description">Compare and contrast different buildings over time to gauge their relative comparisons and load profiles. Switch between an area and line plot to view cumulative or relative consumption.</h5>
            </div>
          </div>
        <BuildingComparison/>
        </md-card>
     </div>
  </div>
</template>

<script>
import MainMap from "@/components/MainMap";
import BuildingComparison from "@/components/BuildingComparison";

export default {
  components: {
    MainMap,
    BuildingComparison
  }
};
</script>

<style>
</style>

