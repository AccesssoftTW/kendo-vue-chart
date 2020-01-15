import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LineChart from '../views/LineChart.vue'
import BarChart from '../views/BarChart.vue'
import PieChart from '../views/PieChart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bar-chart',
    name: 'barChart',
    component: BarChart
  },
  {
    path: '/line-chart',
    name: 'lineChart',
    component: LineChart
  },
  {
    path: '/pie-chart',
    name: 'pieChart',
    component: PieChart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
