<template>
<div class="wrapper">
  <input class="item" type="date" placeholder="date" v-model="date" />
  <input class="item" placeholder="category" v-model="category" />
  <input class="item" placeholder="value" v-model.number="value" />
  <button class="btn" @click="onClick">Add Cost</button>
</div>
</template>

<script>
export default {
  name: "CostAdding",
  data() {
    return{
      date: '',
      category: '',
      value: '',
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      }
      this.$emit('addNewCost', data)
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.item {
  padding: 3px;
}
.btn {
  padding: 6px 3px;
  border: none;
  border-radius: 2px;
  background-color: #e5b0a4;
}
</style>