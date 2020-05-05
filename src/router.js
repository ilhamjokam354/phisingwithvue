import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Facebook from "./views/Facebook.vue";
import LoginFacebook from "./views/LoginFacebook.vue";
import LoginYoutube from "./views/LoginYoutube.vue";
import ProsesInstagram from "./views/ProsesInstagram.vue";
import ProsesFacebook from "./views/ProsesFacebook.vue";
import ProsesYoutube from "./views/ProsesYoutube.vue";
import Youtube from "./views/Youtube.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/instagram",
      name: "instagram",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/facebook",
      name: "facebook",
      components: { default: Facebook, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/youtube",
      name: "youtube",
      components: { default: Youtube, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login/instagram",
      name: "login instagram",
      components: { default: Login },
      
    },
    {
      path: "/login/facebook",
      name: "login facebook",
      components: { default: LoginFacebook },
      
    },
    {
      path: "/login/youtube",
      name: "login youtube",
      components: { default: LoginYoutube },
      
    },
    {
      path: "/proses/instagram",
      name: "proses instagram",
      components: { default: ProsesInstagram, header: MainNavbar, footer: MainFooter },
      
    },
    {
      path: "/proses/facebook",
      name: "proses facebook",
      components: { default: ProsesFacebook, header: MainNavbar, footer: MainFooter },
      
    },
    {
      path: "/proses/youtube",
      name: "proses youtube",
      components: { default: ProsesYoutube, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 50 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  mode : 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
