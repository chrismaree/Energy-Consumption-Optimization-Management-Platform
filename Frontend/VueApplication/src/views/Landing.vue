<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
    			<div class="md-layout-item md-size-100 md-small-size-70 md-xsmall-size-100">
    				<h1 class="title">Wits University Energy Usage Vizualization</h1>
              <h4>Visualize energy usage on campus to gain insight into behaviour, identify trends and reduce consumption</h4>
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
            <div class="md-layout-item md-size-50 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-large-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Free Chat</h4>
                  <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                </div>
              </div>

              <div class="md-layout-item md-large-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">Verified Users</h4>
                    <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                  </div>
              </div>
              <div class="md-layout-item md-large-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>fingerprint</md-icon>
                    </div>
                    <h4 class="info-title">Fingerprint</h4>
                    <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
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
