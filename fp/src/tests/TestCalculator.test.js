import {mount} from "@vue/test-utils";
import Calculator from "../components/Calculator";

describe('Calculator', () => {
    test('correct first operand', () => {
        const wrapper = mount(Calculator)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)
    })

    test('correct second operand', () => {
        const wrapper = mount(Calculator)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        expect(wrapper.vm.operand2).toBe(3)
    })

    test('sum operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        expect(wrapper.vm.operand2).toBe(3)

        const sumBtn = wrapper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wrapper.vm.result).toBe(13)
    })

    test('sub operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('5')
        expect(wrapper.vm.operand2).toBe(5)

        const subBtn = wrapper.find('button[name="-"]')
        subBtn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })

    test('divide operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('0')
        expect(wrapper.vm.operand1).toBe(0)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('4')
        expect(wrapper.vm.operand2).toBe(4)

        const divideBtn = wrapper.find('button[name="/"]')
        divideBtn.trigger('click')

        expect(wrapper.vm.result).toBeCloseTo(0)
    })

    test('multiply operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('4')
        expect(wrapper.vm.operand2).toBe(4)

        const multiplyBtn = wrapper.find('button[name="*"]')
        multiplyBtn.trigger('click')

        expect(wrapper.vm.result).toBe(40)
    })

    test('pow operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('3')
        expect(wrapper.vm.operand1).toBe(3)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')
        expect(wrapper.vm.operand2).toBe(3)

        const powBtn = wrapper.find('button[name="^"]')
        powBtn.trigger('click')

        expect(wrapper.vm.result).toBe(27)
    })

    test('intDivide operation', () => {
        const wrapper = mount(Calculator)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('4')
        expect(wrapper.vm.operand2).toBe(4)

        const intDivideBtn = wrapper.find('button[name="//"]')
        intDivideBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })
})
