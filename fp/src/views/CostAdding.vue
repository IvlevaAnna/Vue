<template>
<div class="wrapper">
  <input class="item" type="date" placeholder="date" v-model="date" />
  <select class="item" v-model="category">
    <option v-for="category, idx in categories" :key="idx">
      {{category}}
    </option>
  </select>
  <input class="item" placeholder="value" v-model.number="value" />
  <button class="btn" @click="onClick">Add Cost</button>
</div>
</template>

<script>
import {mapGetters} from "vuex";

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
    ...mapGetters({
      pagination: 'getPagination',
      categories: 'getCategories',
    }),
    getCurrentDate() {
      const today = new Date().toLocaleDateString('en-CA')
      return today
    }
  },
  methods: {
    addToCosts(data) {
      this.pagination[this.pagination.length - 1].push(data)
    },
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      }
      console.log(data)
      this.addToCosts(data)
    }
  },
  mounted() {
    if( this.$route.params?.category ) {
      this.category = this.$route.params?.category
      this.date = this.getCurrentDate

      if(this.$route.query?.value ) {
        this.value = this.$route.query?.value
        this.addToCosts([this.date, this.category, this.value])
      }
    }

  },
}
</script>

<style scoped>
.wrapper {
  width: 200px;
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
