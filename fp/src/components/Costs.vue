<template>
  <div>
    <table class="costsTable">
      <tr class="headers">
        <td>Date</td>
        <td>Category</td>
        <td>Value</td>
      </tr>
      <tr v-for="cost, idx in costs" :key="idx">
        <td>{{ cost.date }}</td>
        <td>{{ cost.category }}</td>
        <td>{{ cost.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Costs",
  props: ["costs"],
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid #58806b;
  padding: 4px;
  border-collapse: collapse;
  color: #1e3b2c;
}
.costsTable {
  border-collapse: collapse;
}

.headers {
  font-size: 16px;
  font-weight: 550;
}
</style>