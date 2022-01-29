import {mount} from "@vue/test-utils";
import TestComponent from "./TestComponent";

describe('TestComponent', () => {
    test('correct props', () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                name: 'Ann',
            }
        })
        expect(wrapper.text()).toEqual('Hello, Ann!')
    })
})
