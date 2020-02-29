<template>
  <div
    id="vueapp"
    class="vue-app"
    style="width: 1200px; margin: auto; padding-bottom: 50px"
  >
    <kendo-chart
      :title-text="'Site Visitors Stats \n /thousands/'"
      :legend-visible="false"
      :series-defaults-type="'bar'"
      :series="series"
      :category-axis="categoryAxis"
      :value-axis="valueAxis"
      :tooltip="tooltip"
      :theme="'sass'"
    >
    </kendo-chart>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      series: [
        {
          name: "Total Visits",
          data: [56000, 63000, 74000, 91000, 117000, 138000]
        },
        {
          name: "Unique visitors",
          data: [52000, 34000, 23000, 48000, 67000, 83000]
        }
      ],
      valueAxis: [
        {
          max: 140000,
          line: {
            visible: false
          },
          minorGridLines: {
            visible: true
          },
          labels: {
            rotation: "auto"
          }
        }
      ],
      categoryAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        majorGridLines: {
          visible: false
        }
      },
      tooltip: {
        visible: true,
        template: "#= series.name #: #= value #"
      }
    };
  }
};
</script>
