import { describe, test, expect } from "vitest";
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icon from '../Icon/Icon.vue'
describe('Button.vue', () => {
    test('basic button', () => {
        const wrapper = mount(Button, {
            props: {
                type: 'primary'
            },
            slots: {
                default: 'button'
            }
        })
        console.log(wrapper.html())
        expect(wrapper.classes()).toContain('sg-button--primary')

        expect(wrapper.get('button').text()).toBe('button')

        wrapper.get('button').trigger('click')
        console.log(wrapper.emitted())
        expect(wrapper.emitted()).toHaveProperty('click')
    })
    test('disabled', () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true
            },
            slots: {
                default: 'disabled'
            }
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
        expect(wrapper.find('button').element.disabled).toBeDefined()

        wrapper.get('button').trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('click')
    })
    test('icon', () => {
        const wrapper = mount(Button, {
            props: {
                icon: 'arrow-up'
            },
            slots: {
                default: 'icon'
            },
            global: {
                stubs: ['FontAwesomeIcon']
            }
        })
        console.log(wrapper.html())
        const iconElement = wrapper.findComponent(FontAwesomeIcon)
        expect(iconElement.exists()).toBe(true)
        //attributes检查属性
        expect(iconElement.attributes('icon')).toBe('arrow-up')
    })
    test('loading', () => {
        const wrapper = mount(Button, {
            props: { loading: true },
            slots: {
                default: 'loading'
            },
            global: {
                stubs: ['Icon']//模拟第三方组件
            }
        })
        console.log(wrapper.html())
        const iconElement = wrapper.findComponent(Icon)
        expect(iconElement.exists()).toBeTruthy()
        expect(iconElement.attributes('icon')).toBe('spinner')
        expect(wrapper.attributes('disabled')).toBeDefined()
    })
})