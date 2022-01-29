<template>
<div >
  <div class="title">My personal costs</div>
  <Costs :pageCosts="pageCosts"/>
  <Pagination :pagination="pagination" />
</div>
</template>

<script>
import Costs from "../components/Costs";
import { mapMutations, mapGetters, mapActions } from 'vuex'
import Pagination from "../components/Pagination";

export default {
  name: "Dashboard",
  components: {
    Pagination,
    Costs,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      allCosts: 'getAllCosts',
      pageCosts: 'getPageCosts',
      pagination: 'getPagination',
      categories: 'getCategories',
    }),
  },
  methods: {
    ...mapMutations(['setAllCosts']),
    ...mapActions(['fetchPaginationData']),
    fetchData() {
      return [
        {
          date: '2021-01-11',
          category: 'Food',
          value: 150
        },
        {
          date: '2021-11-11',
          category: 'Cosmetics',
          value: 1000
        },
        {
          date: '2021-11-10',
          category: 'Entertainment',
          value: 540
        },
        {
          date: '2021-11-03',
          category: 'Entertainment',
          value: 500
        },
        {
          date: '2021-12-12',
          category: 'Entertainment',
          value: 500
        },
        {
          date: '2021-01-01',
          category: 'Entertainment',
          value: 500
        },
      ]
    },
  },
  created() {
    this.setAllCosts(this.fetchData())
    this.fetchPaginationData()
  }
}
</script>

<style scoped>

</style>
