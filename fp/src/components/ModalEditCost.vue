<template>
<div>
  <div class="header">{{settings.header}}</div>
  <div class="content">
<!--    <CostAdding :cost="settings"/>-->
  </div>
  <div class="footer">
<!--    <button @click="onClickClose">Close</button>-->
  </div>
</div>
</template>

<script>
import CostAdding from "../views/CostAdding";
export default {
  name: "ModalEditCost",
  components: {CostAdding},
}
</script>

<style scoped>

</style>
