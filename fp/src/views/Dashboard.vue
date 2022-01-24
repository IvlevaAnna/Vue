<template>
<div>
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
          date: '11.01.2021',
          category: 'Food',
          value: 150
        },
        {
          date: '11.11.2021',
          category: 'Cosmetics',
          value: 1000
        },
        {
          date: '10.11.2021',
          category: 'Entertainment',
          value: 540
        },
        {
          date: '03.11.2021',
          category: 'Entertainment',
          value: 500
        },
        {
          date: '03.11.2021',
          category: 'Entertainment',
          value: 500
        },
        {
          date: '03.11.2021',
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
