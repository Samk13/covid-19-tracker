<template>
  <div class="container box-border m-auto w-full bg-gray-200">
    <div class="p-5 text-5xl font-black text-center text-red-800">
      covid-19 tracking app
    </div>
    <div class="mt-5" v-if="positiveCases.length > 0">
      <h2 class="text-xl font-black">Positive</h2>
      <LineCharts 
        :chartData="positiveCases"
        :options="chartOptions"
        :label="positiveCases"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import LineCharts from './components/LineCharts'

export default {
  name: 'App',
  components: {
    LineCharts
  },
  data(){
    return {
      positiveCases: [],
      hospitalization: [],
      inIcu: [],
      onVentilators:[],
      recovered: [],
      deaths: [],
      chartOptions: {
        responsive: true,
        maintainAscpectRatio: false
      }
    }
  },
  async created(){
    const { data } = await axios.get('https://covidtracking.com/api/us/daily')
    // console.log(data)
    data.forEach(day => {
      const date = moment(day.date, 'YYYYMMDD').format('MM/DD')
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = day
      this.positiveCases.push({date, total: positive})
      this.hospitalization.push({ date, total: hospitalizedCurrently})
      this.inIcu.push({date, total: inIcuCurrently})
      this.onVentilators.push({date, total: onVentilatorCurrently})
      this.recovered.push({date, total: recovered})
      this.deaths.push({date, total: death})
    })
    console.log();
  }
}
</script>
