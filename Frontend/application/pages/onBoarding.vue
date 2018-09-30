<template>
    <v-app id="onBoarding">
        <h1> Onboard User</h1>
        <v-btn to="/MainMap">Continue</v-btn>
    </v-app>
</template>

<script>
export default {
  components: {},
  methods:{
  },
  mounted(){
    this.$store.commit("fullScreenOn")
  }
}
</script>
