<template>
  <div id="vueapp" class="vue-app">
    <kendo-chart
      ref="chart"
      :title-text="'What is you favourite sport?'"
      :chart-area-background="''"
      :legend-position="'bottom'"
      :series="series"
      :series-defaults-labels-visible="true"
      :series-defaults-labels-position="'outsideEnd'"
      :series-defaults-labels-background="'transparent'"
      :series-defaults-labels-template="labelTemplate"
      :tooltip-visible="true"
      :tooltip-template="tooltipTemplate"
      :theme="'sass'"
    >
    </kendo-chart>
    <div style="margin-top:100px">
      <h3>常見範例</h3>
      <router-link to="/bar-chart">Bar Chart（長條圖）</router-link>
      <br />
      <router-link to="/line-chart">Line Chart（折線圖）</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      series: [
        {
          type: "pie",
          data: [
            {
              category: "Football",
              value: 35
            },
            {
              category: "Basketball",
              value: 25
            },
            {
              category: "Volleyball",
              value: 20
            },
            {
              category: "Rugby",
              value: 10
            },
            {
              category: "Tennis",
              value: 10
            }
          ]
        }
      ],
      labelTemplate: "#= category # - #= kendo.format('{0:P}', percentage)#",
      tooltipTemplate: "#= category # - #= kendo.format('{0:P}', percentage) #"
    };
  }
};
</script>
