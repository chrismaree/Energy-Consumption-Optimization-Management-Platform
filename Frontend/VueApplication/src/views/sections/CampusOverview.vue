<template>
  <div class="wrapper">
     <div class="main main-raised" style="margin-top:50px">
      <md-card class="md-elevation-24" style="margin-bottom:0">
     <div class="md-layout" style="padding-top:0">
            <div class="md-layout-item md-size-50 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
            </div>
          </div>
            <MainMap/>
      </md-card>
     </div>
     <div class="main main-raised" style="margin-top:50px">
      <md-card class="md-elevation-24" style="margin-bottom:0px">
      <div class="md-layout" style="padding-top:0">
            <div class="md-layout-item md-size-50 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
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

