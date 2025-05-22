import { describe, test, expect,vi } from "vitest";
import { mount } from '@vue/test-utils'
import Collapse from "./Collapse.vue";
import Item from './CollapseItem.vue'
import CollapseItem from "./CollapseItem.vue";

describe('Collapse.vue', () => {
    test('basic collapse', async () => {
        const onChange=vi.fn()
        const wrapper = mount(
            // Collapse,{
            // props:{
            //     modelValue:['a']
            // },
            // slots:{
            //     //  default:h(Item,{name:'a',title:'Title A'},'content a')
            //     default:<Item name="a" title="Title A">content a</Item>
            // },

            () =>//jsx写法
                <Collapse modelValue={['a']} onChange={onChange} accordion>
                    <CollapseItem name='a' title='title a'>
                        content a
                    </CollapseItem>
                    <CollapseItem name='b' title='title b'>
                        content b
                    </CollapseItem>
                    <CollapseItem name='d' title='title d' disabled>
                        content d
                    </CollapseItem>
                </Collapse>
            , {
                global: {
                    stubs: ['Icon']
                },
                attachTo: document.body
            })
        //长度
        const headers = wrapper.findAll('.sg-collapse-item__header')
        const contents = wrapper.findAll('.sg-collapse-item__wrapper')
        expect(headers.length).toBe(3)
        expect(contents.length).toBe(3)
        //文本
        const firstHeader = headers[0]
        const secondHeader=headers[1]
        expect(firstHeader.text()).toBe('title a')
        //内容
        const firstContent = contents[0]
        const secondContent = contents[1]
        expect(firstContent.isVisible()).toBeTruthy
        expect(secondContent.isVisible).toBeFalsy
        expect(firstContent.text()).toBe('content a')
        //行为
        // await firstHeader.trigger('click')
        // expect(firstContent.isVisible()).toBeFalsy()
        await secondHeader.trigger('click')
        expect(secondContent.isVisible()).toBeTruthy()
        // expect(onChange).toHaveBeenCalledWith([])
        expect(onChange).toHaveBeenLastCalledWith(['b'])
        expect(firstContent.isVisible()).toBeFalsy()
        //disabled
        const disabledHeader=headers[2]
        const disabledContent=contents[2]
        expect(disabledHeader.classes()).toContain('is-disabled')
        await disabledHeader.trigger('click')
        expect(disabledContent.isVisible()).toBeFalsy
    })
})