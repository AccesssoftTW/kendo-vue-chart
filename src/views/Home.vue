<template>
  <div id="vueapp" class="vue-app">
    <kendo-chart
      :style="style"
      :title-text="'Kendo Chart Example'"
      :series="series"
      :category-axis-categories="categories"
      :theme="'sass'"
    >
    </kendo-chart>
    <div style="margin-top:100px">
      <h3>常見範例</h3>
      <router-link to="/bar-chart">Bar Chart（長條圖）</router-link>
      <br />
      <router-link to="/line-chart">Line Chart（折線圖）</router-link>
      <br />
      <router-link to="/pie-chart">Pie Chart（圓餅圖）</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueapp",
  data: function() {
    return {
      series: [
        {
          name: "Example Series",
          data: [200, 450, 300, 125]
        }
      ],
      categories: [2000, 2001, 2002, 2003],
      style: "width: 1200px; margin: auto"
    };
  }
};
</script>
