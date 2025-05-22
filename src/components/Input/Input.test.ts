import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from './Input.vue';
import { wrap } from 'module';

describe('Input', () => {
    it('基本展示', () => {
        //class是否正确
        const wrapper = mount(Input, {
            props: {
                size: 'small',
                type: 'text',
                modelValue:''
            },
            slots: {
                prepend: 'prepend',
                prefix: 'prefix'
            }
        })
        console.log(wrapper.html())
        //class是否正确
        expect(wrapper.classes()).toContain('sg-input--small')
        expect(wrapper.classes()).toContain('sg-input--text')
        expect(wrapper.classes()).toContain('is-prepend')
        expect(wrapper.classes()).toContain('is-prefix')
        //v-if
        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.get('input').attributes('type')).toBe('text')

        //slots
        expect(wrapper.find('.sg-input__prepend').exists()).toBeTruthy()
        expect(wrapper.get('.sg-input__prepend').text()).toBe('prepend')
        expect(wrapper.find('.sg-input__prefix').exists()).toBeTruthy()
        expect(wrapper.get('.sg-input__prefix').text()).toBe('prefix')
        //textarea
        const wrapper2= mount(Input, {
            props: {
                type: 'textarea',
                 modelValue:''
            }
        })
        expect(wrapper2.find('textarea').exists()).toBeTruthy()
    });
    it('支持v-model',async()=>{
        const wrapper=mount(Input,{
            props: {
                type:'text',
              modelValue: 'test',
              'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e })
            }
          })
//初始值
        const input=wrapper.get('input')
        expect(input.element.value).toBe('test')
//更新值
await input.setValue('update')
expect(wrapper.props('modelValue')).toBe('update')
expect(input.element.value).toBe('update')

console.log('the events', wrapper.emitted())
expect(wrapper.emitted()).toHaveProperty('input')
expect(wrapper.emitted()).toHaveProperty('change')
const inputEvent = wrapper.emitted('input')
const changeEvent = wrapper.emitted('change')
expect(inputEvent![0]).toEqual(['update'])
expect(changeEvent![0]).toEqual(['update'])

//v-model异步更新
await wrapper.setProps({modelValue:'prop update'})
expect(input.element.value).toBe('prop update')
    })

    it('清空字符串',async()=>{
        const wrapper=mount(Input,{
            props:{
                modelValue:'test',
                clearable:true,
                type:'text'
            },
            global:{
                stubs:['Icon']
            }
        })

        //非focus不出现icon
        expect(wrapper.find('.sg-input__clear').exists()).toBeFalsy()
        const input=wrapper.get('input')

        await input.trigger('focus')
        expect(wrapper.emitted()).toHaveProperty('focus')
        expect(wrapper.find('.sg-input__clear').exists()).toBeTruthy()
    
        await wrapper.get('.sg-input__clear').trigger('click')
        expect(input.element.value).toBe('')
        expect(wrapper.emitted()).toHaveProperty('clear')
        expect(wrapper.emitted()).toHaveProperty('input')
        expect(wrapper.emitted()).toHaveProperty('change')
        const inputEvent = wrapper.emitted('input')
        const changeEvent = wrapper.emitted('change')
        expect(inputEvent![0]).toEqual([''])
        expect(changeEvent![0]).toEqual([''])

        await input.trigger('blur')
        expect(wrapper.emitted()).toHaveProperty('blur')
    })

    it.only('密码隐藏',async()=>{
        const wrapper=mount(Input,{
            props:{
                modelValue:'',
                showPassword:true,
                type:'text'
            },
            global:{
                stubs:['icon']
            }
        })
        //内容为空时无icon
        expect(wrapper.find('.sg-input__password').exists()).toBeFalsy()
        const input=wrapper.get('input')
        expect(input.element.type).toBe('password')

        await input.setValue('123')
        const eyeIcon=wrapper.find('.sg-input__password')
expect(eyeIcon.exists()).toBeTruthy()
expect(eyeIcon.attributes('icon')).toBe('eye-slash')
await eyeIcon.trigger('click')
expect(input.element.type).toBe('text')
expect(wrapper.find('.sg-input__password').attributes('icon')).toBe('eye')
    })

});
