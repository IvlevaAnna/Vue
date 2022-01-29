<template>
  <v-container class="ml-0 pl-0">
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Date
          </th>
          <th class="text-left">
            Category
          </th>
          <th class="text-left">
            Value
          </th>
          <th class="text-left"></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(cost, idx) in pageCosts" :key="idx">
            <td>{{ cost.date }}</td>
            <td>{{ cost.category }}</td>
            <td>{{ cost.value }}</td>
            <td>
              <v-dialog
                  v-model="dialog"
                  width="500"
              >
                <template v-slot:activator="{on}">
                  <v-icon
                      small class="mr-3"
                      v-on="on"
                      @click="showContextMenu = idx"
                  >
                    mdi-pencil
                  </v-icon>
                </template>
                <ModalEditCost :idx="idx" v-show="showContextMenu === idx" :dialog="dialog"/>
              </v-dialog>
              <v-icon small @click="onDelete(idx, allCosts)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import ModalEditCost from "./ModalEditCost";
export default {
  name: "Costs",
  components: {ModalEditCost},
  props: ["pageCosts"],
  data() {
    return {
      showContextMenu: null,
      id: null,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      pagination: "getPagination",
      allCosts: "getAllCosts",
      pageNum: "getPageNum",
      editForm: 'getEditForm'
    }),
  },
  methods: {
    ...mapMutations(["setAllCosts", "setEditId", "setEditForm"]),
    ...mapActions(["fetchPaginationData"]),
    onDelete(id, allCosts) {
      this.setAllCosts(this.$modal.delete(id + this.pageNum * 5, allCosts));
      this.fetchPaginationData();
    },
  },
};
</script>

<style scoped>

</style>
