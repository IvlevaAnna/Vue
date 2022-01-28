<template>
<div>
  <input class="item" type="date" placeholder="date" v-model="date" />
  {{date}}
  <select class="item" v-model="category">
    <option v-for="category, idx in categories" :key="idx">
      {{category}}
    </option>
  </select>
  <input class="item" placeholder="value" v-model.number="value" />
  <button class="btn" @click="onClick">Edit Cost</button>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "ModalEditCost",
  props: {cost: Object, idx: Number},
  data: function() {
    return {
      date: '',
      category: '',
      value: '',
      id: 0,
    }
  },
  watch: {
    cost: function(value) {
      this.date = value.date
      this.category = value.category
      this.value = value.value
    },
    idx: function(value) {
      this.id = value
    }
  },
  computed: {
    ...mapGetters({
      allCosts: 'getAllCosts',
      categories: 'getCategories',
    }),
    getCurrentDate() {
      const today = new Date().toLocaleDateString('en-CA')
      return today
    }
  },
  methods: {
    ...mapMutations(['setAllCosts']),
    ...mapActions(['fetchPaginationData']),
    onClick() {
      const data = {
        id: this.id,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      }
      console.log(data)
      this.setAllCosts(this.$modal.edit(data, this.allCosts))
      this.fetchPaginationData()
    }
  },
}
</script>

<style scoped>

</style>
