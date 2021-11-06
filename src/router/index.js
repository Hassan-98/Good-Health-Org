import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "@pages/Home.vue";
import About from "@pages/About.vue";
import Contact from "@pages/Contact.vue";
import Team from "@pages/Team.vue";
import Causes from "@pages/Causes.vue";
import SingleCause from "@pages/Single-Cause.vue";
import Events from "@pages/Events.vue";
import SingleEvent from "@pages/Single-Event.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/causes",
    name: "Causes",
    component: Causes
  },
  {
    path: "/causes/:cause_id",
    name: "SingleCause",
    component: SingleCause
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/events/:event_id",
    name: "SingleEvent",
    component: SingleEvent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// START LOADER BEFORE NAVIGATING
router.beforeEach((to, from, next) => {
  to;
  from;
  store.commit("startLoading");
  next();
});

export default router;
