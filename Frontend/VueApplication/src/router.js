import Vue from "vue";
import Router from "vue-router";

import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import CampusOverview from "./views/CampusOverview.vue"

import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "index",
      components: {
        default: Landing,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        default: Landing,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/CampusOverview",
      name: "CampusOverview",
      components: {
        default: CampusOverview,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 0
        },
        footer: {
          backgroundColor: "black"
        }
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: {
          colorOnScroll: 400
        }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});