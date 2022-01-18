<template>
  <div class="pagination">
    <button @click="setPage(page)"  v-for="page, idx in pagination" :key="idx">
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
    ...mapMutations(['setCosts']),
    setPage(page) {
      this.setCosts(page)
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
