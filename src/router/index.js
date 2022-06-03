import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import UserProfile from "../views/UserProfile.vue"
import Portfolio from "../views/Portfolio.vue"
import Prices from "../views/Prices.vue"
import Exchange from "../views/Exchange.vue"
import Calender from "../views/Calender.vue"
import Notes from "../views/Notes.vue"

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: UserProfile,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/prices",
    name: "prices",
    component: Prices,
  },
  {
    path: "/exchange",
    name: "exchange",
    component: Exchange,
  },
  {
    path: "/calender",
    name: "calender",
    component: Calender,
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
