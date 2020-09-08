import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Meetings from "../views/Meetings.vue";
import CheckIn from "../views/CheckIn.vue";
import Attendees from "../views/Attendees.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/meetings",
    name: "meetings",
    component: Meetings
  },
  {
    path: "/checkin/:userID/:meetingID",
    name: "CheckIn",
    component: CheckIn
  },
  {
    path: "/attendees/:userID/:meetingID",
    name: "Attendees",
    component: Attendees
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
