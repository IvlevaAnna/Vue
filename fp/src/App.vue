<template>
  <div id="app">
    <header>
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/add/payment">Cost adding</router-link>
    </header>
    <router-view />
    <div class="modal" v-if="editForm">
      <ModalEditCost :idx="editId"/>
    </div>
  </div>
</template>

<script>
import ModalEditCost from "./components/ModalEditCost";
import {mapGetters} from "vuex";
export default {
  name: "App",
  components: {ModalEditCost},
  data() {
    return {
    }
  },
  created() {
    this.$modal.show()
  },
  computed: {
    ...mapGetters({
      editForm: 'getEditForm',
      editId: 'getEditId',
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  padding: 15px;
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #1e3b2c;
}
.container {
  display: flex;
  gap: 40px;
}

.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding-top: 100px;
  background: rgba(200, 214, 229,0.4);
  z-index: 15;
}
</style>
