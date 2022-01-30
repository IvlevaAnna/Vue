<template>
  <div>
    <doughnut-chart :categories="categories" :sum="sum"></doughnut-chart>
  </div>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart'

export default {
  components: {
    DoughnutChart
  },
  props:['categories', 'sum'],
}
</script>
