<template>
<div class="wrapper">
  <button class="btn_close" @click="onClose">
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.37112 7.17407L14.6085 2.1643C14.857 1.92696 14.9969 1.60489 14.9972 1.26894C14.9975 0.932989 14.8583 0.61068 14.6101 0.372918C14.362 0.135156 14.0253 0.00141557 13.6741 0.00111888C13.3229 0.000822195 12.9859 0.133993 12.7374 0.371336L7.5 5.3811L2.26263 0.371336C2.01407 0.133574 1.67694 0 1.32542 0C0.973897 0 0.636771 0.133574 0.388207 0.371336C0.139642 0.609098 0 0.931574 0 1.26782C0 1.60407 0.139642 1.92654 0.388207 2.1643L5.62557 7.17407L0.388207 12.1838C0.139642 12.4216 0 12.7441 0 13.0803C0 13.4166 0.139642 13.739 0.388207 13.9768C0.636771 14.2146 0.973897 14.3481 1.32542 14.3481C1.67694 14.3481 2.01407 14.2146 2.26263 13.9768L7.5 8.96704L12.7374 13.9768C12.9859 14.2146 13.3231 14.3481 13.6746 14.3481C14.0261 14.3481 14.3632 14.2146 14.6118 13.9768C14.8604 13.739 15 13.4166 15 13.0803C15 12.7441 14.8604 12.4216 14.6118 12.1838L9.37112 7.17407Z" fill="black"/>
    </svg>
  </button>
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
  props: {idx: Number},
  data: function() {
    return {
      date: '',
      category: '',
      value: '',
      id: null,
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
    ...mapMutations(['setAllCosts', 'setEditForm']),
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
    },
    onClose() {
      this.setEditForm()
    }
  },
  mounted() {
    this.id = this.$props.idx
    this.date= this.allCosts[this.id].date
    this.category= this.allCosts[this.id].category
    this.value= this.allCosts[this.id].value
  }
}
</script>

<style scoped>
.wrapper {
  width: 200px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 45%;
  margin-right: 45%;
  gap: 20px;
}
.item {
  padding: 3px;
}
.btn, .btn_close {
  padding: 6px 3px;
  border: none;
  border-radius: 2px;
  background-color: #e5b0a4;
}

.btn_close {
  text-align: right;
  background-color: transparent;
}
</style>
