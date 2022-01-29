<template>
  <v-pagination
      v-model="selected"
      :length="pagination.length"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @input="setPage"
  ></v-pagination>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Pagination",
  data() {
    return{
      selected: 0,
    }
  },
  computed: {
    ...mapGetters({
      page: 'getPageNum',
      pagination: "getPagination",
    }),
  },
  methods: {
    ...mapMutations(["setPageCosts", "setPageNum"]),
    setPage() {
      console.log(this.selected)
      this.setPageCosts(this.pagination[this.selected - 1]);
      this.setPageNum(this.selected - 1);
    },
  },
};
</script>

<style>
.pagination {
  margin-top: 20px;
  display: flex;
  gap: 7px;
}
</style>
