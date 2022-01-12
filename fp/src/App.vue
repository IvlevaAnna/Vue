<template>
  <div id="app">
    <div class="container">
      <div>
        <div class="title">My personal costs</div>
        <Costs :costs="costs"/>
      </div>
      <CostAdding @addNewCost="addToCosts" />
    </div>
  </div>
</template>

<script>
import Costs from "./components/Costs";
import CostAdding from "./components/CostAdding";

export default {
  name: "App",
  components: {
    Costs,
    CostAdding,
  },
  data() {
    return {
      costs: [
        {
          date: '11.01.2021',
          category: 'Food',
          value: 150
        },
        {
          date: '11.11.2021',
          category: 'Cosmetics',
          value: 1000
        },
        {
          date: '10.11.2021',
          category: 'Entertainment',
          value: 540
        },
        {
          date: '03.11.2021',
          category: 'Entertainment',
          value: 500
        },
      ]
    }
  },
  methods: {
    addToCosts(data) {
      this.costs.push(data)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  padding: 15px;
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #1e3b2c;
}
.container {
  display: flex;
  gap: 40px;
}
</style>
