<template>
  <div class="container box-border m-auto w-full bg-gray-200">
    <P class="p-5 text-5xl font-black text-center text-red-800">covid-19 Data visualization</P>
    <div class="mt-5" v-if="positiveCases.length > 0">
      <h2 class="text-xl font-black">Registered Positive</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="positiveCases"
          :options="chartOptions"
          :label="positiveCases"
          :chartColors="positiveChartColors"
          :height="100"
          :width="200"
        />
      </div>
    </div>
    <div class="mt-5" v-if="hospitalization.length > 0">
      <h2 class="text-xl font-black">hospitalization</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="hospitalization"
          :options="chartOptions"
          :label="hospitalization"
          :height="100"
          :width="200"
          :chartColors="hospitalizationChartColors"
        />
      </div>
    </div>
    <div class="mt-5" v-if="inIcu.length > 0">
      <h2 class="text-xl font-black">Under ICU</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="inIcu"
          :options="chartOptions"
          :label="inIcu"
          :height="100"
          :width="200"
          :chartColors="inIcuChartColors"
        />
      </div>
    </div>
    <div class="mt-5" v-if="onVentilators.length > 0">
      <h2 class="text-xl font-black">onVentilators</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="onVentilators"
          :options="chartOptions"
          :label="onVentilators"
          :height="100"
          :width="200"
          :chartColors="onVentilatorsChartColors"
        />
      </div>
    </div>
    <div class="mt-5" v-if="recovered.length > 0">
      <h2 class="text-xl font-black">recovered</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="recovered"
          :options="chartOptions"
          :label="recovered"
          :height="100"
          :width="200"
          :chartColors="recoveredChartColors"
        />
      </div>
    </div>
    <div class="mt-5" v-if="deaths.length > 0">
      <h2 class="text-xl font-black">deaths</h2>
      <div class="bg-gray-500 rounded-lg hover:shadow-md">
        <LineCharts
          :chartData="deaths"
          :options="chartOptions"
          :label="deaths"
          :height="100"
          :width="200"
          :chartColors="deathsChartColors"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import LineCharts from "./components/LineCharts";

export default {
  name: "App",
  components: {
    LineCharts
  },
  data() {
    return {
      positiveCases: [],
      positiveChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#335c67'
      },
      hospitalizationChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#708d81'
      },
      inIcuChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#f4d58d'
      },
      onVentilatorsChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#bf0603'
      },
      recoveredChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#8d0801'
      },
      deathsChartColors: {
        borderColor:'#077187',
        pointBorderColor:'#0E1428',
        pointBackgroundColor:'#AFD6AC',
        backgroundColor:'#343a40'
      },
      hospitalization: [],
      inIcu: [],
      onVentilators: [],
      recovered: [],
      deaths: [],
      chartOptions: {
        responsive: true,
        maintainAscpectRatio: false
      }
    };
  },
  async created() {
    const { data } = await axios.get("https://covidtracking.com/api/us/daily");
    // console.log(data)
    data.forEach(day => {
      const date = moment(day.date, "YYYYMMDD").format("MM/DD");
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = day;
      this.positiveCases.push({ date, total: positive });
      this.hospitalization.push({ date, total: hospitalizedCurrently });
      this.inIcu.push({ date, total: inIcuCurrently });
      this.onVentilators.push({ date, total: onVentilatorCurrently });
      this.recovered.push({ date, total: recovered });
      this.deaths.push({ date, total: death });
    });
    console.log();
  }
};
</script>
