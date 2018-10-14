<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
    			<div class="md-layout-item md-size-45 md-small-size-70 md-xsmall-size-100">
    				<h1 class="title">Unlocking the power of campus energy data</h1>
              <h4>Shedding light on Wits energy usage to gain insight into behaviour, identify trends and reduce consumption. Helping Wits save money and become a greener campus.</h4>
              <br>
              <md-button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="md-success md-lg" target="_blank"><i class="fas fa-play"></i> Watch video</md-button>
    			</div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section" style="padding-top:50px">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-85 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">You can't manage what you can't measure</h2>
              <h5 class="description">
                Until now there was no way to visualize live or historic energy consumption on campus. As a result, it is impossible to identify trends or reduce consumption. This makes wits very ungreen and expensive to run.
                <br>
                <br>
                It is hard to react to unusually high consumption and compare to historic usages. This means that faulty system or human fault (like leaving machinery on over the holidays) can't be detected. Moreover, it is impossible to quantify any reduction in consumption after installing greener hardware such as LED light bulbs. 
                <br>
                <br>
                Given that energy prices are only going to increase in the future, it is important to reduce our consumption as a campus to reduce the total spent on electricity. Additionally, it is likely that carbon taxes will be imposed on big consumers in the future.

                  </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
            <div class="md-layout-item">
              <h2 class="title text-center text-center">Data visualization can change behaviour</h2>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-large-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>compare</md-icon>
                  </div>
                  <h4 class="info-title">Building comparison</h4>
                  <p>Compare a building against its past consumption or against other buildings to gain insight into past usage. </p>
                </div>
              </div>

              <div class="md-layout-item md-large-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>fingerprint</md-icon>
                    </div>
                    <h4 class="info-title">Load profiles</h4>
                    <p>View the trend of a building over different time periods to identify inefficiencies and consumption patterns.</p>
                  </div>
              </div>
              <div class="md-layout-item md-large-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>timeline</md-icon>
                    </div>
                    <h4 class="info-title">Live data</h4>
                    <p>View the current consumption of every building on campus and detect unexpected behaviour.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CampusOverview/>
  </div>
</template>

<script>
import MainMap from "@/components/MainMap";
import CommitChart from "@/components/CommitChart";
import CampusOverview from "@/views/sections/CampusOverview";

export default {
  bodyClass: "landing-page",
  components: {
    MainMap,
    CommitChart,
    CampusOverview
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/landingImage.jpg")
    }
  },

  data() {
    return {};
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
