<template>
<div>
  <input class="item" type="date" placeholder="date" v-model="date" />
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
  data() {
    return{
      date: this.$props.cost.date || '',
      category: '',
      value: this.$props.cost.value || '',
      id: this.$props.idx || null,
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
  mounted() {
    console.log(this.$props)
    if(this.$props.cost) {
      this.date = this.$props.cost.date
      this.category = this.$props.cost.category
      this.value = this.$props.cost.value
    }
    if(this.$props.idx) {
      this.id = this.$props.cost.id
    }

  },
}
</script>

<style scoped>

</style>
