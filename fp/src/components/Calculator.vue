<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number"/>
      <input v-model.number="operand2" type="number"/>
      = {{result}}
    </div>
    <div class="keyboard">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="divide">/</button>
      <button @click="multiply">*</button>
      <button @click="pow">^</button>
      <button @click="intDivide">//</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Calculator",
  data () {
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    sum () {
      this.result = this.operand1 + this.operand2
    },
    sub () {
      this.result = this.operand1 - this.operand2
    },
    divide () {
      this.result = this.operand1 / this.operand2
    },
    multiply () {
      this.result = this.operand1 * this.operand2
    },
    pow () {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    intDivide () {
      this.result = Math.floor(this.operand1 / this.operand2)
    }
  }
}
</script>
