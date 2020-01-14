import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Chart,
        // ChartSeriesItem,
        Sparkline,
        // SparklineSeriesItem,
        StockChart,
        ChartInstaller } from '@progress/kendo-charts-vue-wrapper'

Vue.use(ChartInstaller)

Vue.config.productionTip = false

new Vue({
  Chart,
  Sparkline,
  StockChart,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
