<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number"/>
      <span class="operation">{{chosenOperation}}</span>
      <input v-model.number="operand2" type="number"/>
      = {{result}}
    </div>
    <button v-for="(operation, idx) in operations"
            :key="idx"
            @click="calculate(operation)"
            :disabled="operation === '/' && ( operand2 === 0 || operand2 === '')"
            class="btn"
    >
      {{operation}}
    </button>

    <div class="show">
      <label for="keyboard">Show keyboard</label>
      <input v-model="showKeyboard" type="checkbox" id="keyboard"/>
    </div>

    <div v-show="showKeyboard">
      <div class="keyboard">
        <button v-for="(key, idx) in keyboard"
                :key="idx"
                @click="keyClick(key)"
                class="btn"
        >
          {{key}}
        </button>
      </div>
      <form class="radios">
        <label for="operand1">Operand 1</label>
        <input id="operand1" type="radio" value="1" v-model="chosenOperand"/>
        <label for="operand2">Operand 2</label>
        <input id="operand2" type="radio" value="2" v-model="chosenOperand"/>
      </form>
  </div>
  </div>

</template>

<script>
import './style.css'
export default {
  name: "Calculator",
  data () {
    return {
      chosenOperand: '',
      chosenOperation: '',
      keyboard: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'del'],
      showKeyboard: true,
      operations: ['+', '-', '/', '*', '^', '//'],
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    calculate (operation) {
      this.chosenOperation = operation
      switch (operation) {
        case '+':
          this.result = this.operand1 + this.operand2
              break
        case '-':
          this.result = this.operand1 - this.operand2
              break
        case '/':
          this.result = this.operand1 / this.operand2
              break
        case '*':
          this.result = this.operand1 * this.operand2
              break
        case '^':
          this.result = Math.pow(this.operand1, this.operand2)
              break
        case '//':
          this.result = Math.floor(this.operand1 / this.operand2)
              break
      }
    },
    keyClick (key) {
      if (this.chosenOperand === '1') {
        if (key === 'del') {
          this.operand1 = Math.floor(this.operand1 / 10)
        } else {
          this.operand1 = +(String(this.operand1) + key)
        }
      } else if (this.chosenOperand === '2') {
        if (key === 'del') {
          this.operand2 = Math.floor(this.operand2 / 10)
        } else {
          this.operand2 = +(String(this.operand2) + key)
        }
      }
    }
  }
}
</script>
