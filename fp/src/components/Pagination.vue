<template>
  <div class="pagination">
    <button @click="setPage(page, idx)"  v-for="page, idx in pagination" :key="idx">
      {{idx + 1}}
    </button>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Pagination",
  props: ['pagination'],
  methods: {
    ...mapMutations(['setPageCosts', "setPageNum"]),
    setPage(page, idx) {
      this.setPageCosts(page)
      this.setPageNum(idx)
    }
  }
}
</script>

<style>
.pagination {
  margin-top: 20px;
  display: flex;
  gap: 7px;
}
</style>
