<template>
  <div class="wrapper">
     <!-- <div class="main"> -->
      <!-- Main Map container -->
      <!-- <div class="section">
        <div class="container">     -->
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <!-- <basic-elements></basic-elements> -->
          
          <div class="md-layout">
            <div class="md-layout-item md-size-30">
              Some charts
            </div>
        
            <div class="md-layout-item md-size-70">
              <MainMap/>
            </div>
          </div>
          
      
      <!-- </div> -->
      <!-- building analisis section -->
      <div class="section section-navbars">
        <div class="container">
          <!-- <small-navigation></small-navigation> -->
        </div>
      <!-- </d</div>iv> -->
    </div>
  </div>
</template>

<script>
import MainMap from "../components/MainMap";
export default {
  components: {
    MainMap
  }
};
</script>

<style>
</style>

