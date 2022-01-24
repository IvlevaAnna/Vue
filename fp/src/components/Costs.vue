<template>
  <div style="position: relative">
    <table class="costsTable">
      <tr class="headers">
        <td>Date</td>
        <td>Category</td>
        <td>Value</td>
      </tr>
      <tr v-for="cost, idx in pageCosts" :key="idx">
        <td>{{ cost.date }}</td>
        <td>{{ cost.category }}</td>
        <td>{{ cost.value }}</td>
        <td>
          <button class="btn" @mouseover="showContextMenu = idx" @mouseleave="showContextMenu =null">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="15" height="15" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_76702_2" transform="scale(0.03125)"/>
                </pattern>
                <image id="image0_76702_2" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABJwAAAScBjbzwzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEZSURBVFiF7ZcxbgIxEEXfj6CAjgtsFVFE2ntwgBQcghNxEl+CKhISUtqcgCIFkZzGK9DiAn/MbrNfmmI92vHTeDy2iTFSasAK2AM/yfbAyoplTD4HDkDs2QGYDwGwzUze2bY03hvl+jB9WTkA36YvL2MJlsCJ+/SfgOXLayBBNEAA/pIFoHFiKQW0JGmRsvhrx3gGoIacIpwAqmrm/iipBTbpM8QYv6xA5jbcAReuPeAC7IY6jNre5LcQ7RBnwYb80s24LsnDGr0IHYCuBffVteQyjV2EdiuutQ2ns2ACeApA0qK7lAwKIKmRFIAzcJYUJDUWgdEDql5KnQx8AuvM+Dr5iuQAvJu+agBH05eXUQPjPk4TRLXn+T/LVJD0qHaMkgAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
            <div class="select" v-show="showContextMenu === idx">
              <button @click="onDelete(idx, allCosts)">Delete</button>
              <button @click="() => {editForm=true; editCost = cost}">Edit</button>
            </div>
          </button>
        </td>
      </tr>
    </table>
    <div class="modal" v-show="editForm">
      <CostAdding :cost="editCost"/>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import CostAdding from "../views/CostAdding";
export default {
  name: "Costs",
  components: {CostAdding},
  props: ["pageCosts"],
  data() {
    return {
      showContextMenu: null,
      editForm: false,
      editCost: {},
    }
  },
  computed: {
  ...mapGetters({pagination: 'getPagination', allCosts: 'getAllCosts', pageNum: 'getPageNum'})
  },
  methods: {
    ...mapMutations(['setAllCosts']),
    ...mapActions(['fetchPaginationData']),
    onDelete(id, allCosts) {
      this.setAllCosts(this.$modal.delete((id + this.pageNum * 5), allCosts))
      this.fetchPaginationData()
    },
  }
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid #58806b;
  padding: 4px;
  border-collapse: collapse;
  color: #1e3b2c;
}
td {
  position: relative;
}
.costsTable {
  border-collapse: collapse;
}

.headers {
  font-size: 16px;
  font-weight: 550;
}
.btn {
  background: transparent;
  border: none;
  margin-top: 4px;
}

.select {
  position: absolute;
  z-index: 10;
}
.select > button {
  width: 60px;
  border: none;
  padding: 3px;
}

.select >button:first-of-type {
  border-radius: 3px 3px 0 0;
  border-bottom: solid 1px black;
}

.select >button:last-of-type {
  border-radius: 0 0 3px 3px;
}

.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #e5b0a4;
  z-index: 15;
}

</style>
