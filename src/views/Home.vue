<template>
  <div id="vueapp">
    <AreaChart></AreaChart>
    <BarChart></BarChart>
    <LineChart></LineChart>
    <PieChart></PieChart>
  </div>
</template>

<script>
import AreaChart from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

export default {
  name: "vueapp",
  data: function() {
    return {};
  },
  components: {
    AreaChart,
    BarChart,
    LineChart,
    PieChart
  }
};
</script>
