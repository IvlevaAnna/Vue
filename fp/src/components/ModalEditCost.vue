<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="date" type="date"></v-text-field>
    <v-select
        v-model="category"
        :items="categories"
        label="category"
    ></v-select>
    <v-text-field v-model="value" label="value"></v-text-field>
    <v-btn color='#C5CAE9' @click="editCost">Edit Cost</v-btn>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "ModalEditCost",
  props: { idx: Number, dialog: Boolean },
  data: function () {
    return {
      date: "",
      category: "",
      value: "",
      id: null,
    };
  },
  computed: {
    ...mapGetters({
      allCosts: "getAllCosts",
      categories: "getCategories",
      pageNum: 'getPageNum'
    }),
    getCurrentDate() {
      const today = new Date().toLocaleDateString("en-CA");
      return today;
    },
  },
  methods: {
    ...mapMutations(["setAllCosts", "setEditForm", 'setEditId']),
    ...mapActions(["fetchPaginationData"]),
    editCost() {
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
  },
  mounted() {
    this.id = this.$props.idx + ( this.pageNum * 5);
    this.date = this.allCosts[this.id].date;
    this.category = this.allCosts[this.id].category;
    this.value = this.allCosts[this.id].value;
  },
};
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

</style>
