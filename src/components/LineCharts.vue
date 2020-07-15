// No need for template tag for vue-charts, it's just JS
<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const dates = this.chartData.map((d) => d.date).reverse()
    const totals = this.chartData.map((d) => d.total).reverse()
    const {borderColor, pointBorderColor, pointBackgroundColor, backgroundColor} = this.chartColors
    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            borderColor,
            pointBorderColor,
            pointBackgroundColor,
            backgroundColor
          },
        ],
      },
      this.options
    );
  },
};
</script>
