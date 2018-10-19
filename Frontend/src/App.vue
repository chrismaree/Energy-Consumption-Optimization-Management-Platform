<template>
  <div id="material-kit">
    <div :class="{'nav-open': NavbarStore.showNavbar}">
      <router-view name="header"/>
      <div>
        <router-view/>
      </div>
      <router-view name="footer"/>
    </div>
  </div>
</template>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

</style>
