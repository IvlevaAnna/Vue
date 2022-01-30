<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="date" type="date"></v-text-field>
    <v-select
        v-model="category"
        :items="categories"
        label="category"
    ></v-select>
    <v-text-field v-model="value" label="value"></v-text-field>
    <v-btn color='#C5CAE9' @click="onClick">Add Cost</v-btn>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CostAdding",
  data() {
    return {
      date: "",
      category: "",
      value: "",
      id: null,
    };
  },
  computed: {
    ...mapGetters({
      pagination: "getPagination",
      categories: "getCategories",
    }),
    getCurrentDate() {
      const today = new Date().toLocaleDateString("en-CA");
      return today;
    },
  },
  methods: {
    addToCosts(data) {
      this.pagination[this.pagination.length - 1].push(data);
    },
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      console.log(data);
      this.addToCosts(data);
    },
  },
  mounted() {
    if (this.$route.params?.category) {
      this.category = this.$route.params?.category;
      this.date = this.getCurrentDate;

      if (this.$route.query?.value) {
        this.value = this.$route.query?.value;
        this.addToCosts([this.date, this.category, this.value]);
      }
    }
  },
};
</script>

<style scoped>
</style>
