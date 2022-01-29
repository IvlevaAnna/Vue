<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="title">My personal costs</div>
        <v-dialog
            v-model="dialog"
            width="500"
        >
          <template v-slot:activator="{on}">
            <v-btn color="teal" dark class="mt-4 mb-2" v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <CostAdding />
        </v-dialog>
        <Costs :pageCosts="pageCosts" />
        <Pagination/>
      </v-col>

      <v-col>
        chart
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Costs from "../components/Costs";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination";
import CostAdding from "./CostAdding";

export default {
  name: "Dashboard",
  components: {
    CostAdding,
    Pagination,
    Costs,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      allCosts: "getAllCosts",
      pageCosts: "getPageCosts",
      categories: "getCategories",
    }),
  },
  methods: {
    ...mapMutations(["setAllCosts"]),
    ...mapActions(["fetchPaginationData"]),
    fetchData() {
      return [
        {
          date: "2021-01-11",
          category: "Food",
          value: 150,
        },
        {
          date: "2021-11-11",
          category: "Cosmetics",
          value: 1000,
        },
        {
          date: "2021-11-10",
          category: "Entertainment",
          value: 540,
        },
        {
          date: "2021-11-03",
          category: "Entertainment",
          value: 500,
        },
        {
          date: "2021-12-12",
          category: "Entertainment",
          value: 500,
        },
        {
          date: "2021-01-01",
          category: "Entertainment",
          value: 500,
        },
      ];
    },
  },
  created() {
    this.setAllCosts(this.fetchData());
    this.fetchPaginationData();
  },
};
</script>

<style scoped></style>
