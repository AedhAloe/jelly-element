import { describe, test, expect, vi,beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

const onVisibleChange = vi.fn()

describe('Tooltip.vue', () => {
    beforeEach(()=>{
        vi.useFakeTimers()
    })
    test('basic tooltip', async () => {
        const wrapper = mount(() =>
            <div>
                <div id="outside"></div>
            <Tooltip content="hello tooltip" trigger='click' onVisible-change={onVisibleChange}>
                <button id="trigger" >Trigger</button>
            </Tooltip>
            </div>
            , {
                attachTo: document.body
            })
            //静态测试
            const triggerArea = wrapper.find('#trigger')
            expect(triggerArea.exists()).toBeTruthy()
            expect(wrapper.find('.sg-tooltip__popper').exists()).toBeFalsy()
            //测试点击
            triggerArea.trigger('click')
            await vi.runAllTimers()
            expect(wrapper.find('.sg-tooltip__popper').exists()).toBeTruthy()
            expect(onVisibleChange).toHaveBeenCalledWith(true)
            //测试点击外部
            const outsideArea = wrapper.find('#outside')
            outsideArea.trigger('click')
            await vi.runAllTimers()
            expect(wrapper.find('.sg-tooltip__popper').exists()).toBeFalsy()
            expect(onVisibleChange).toHaveBeenCalledWith(false)
        

        })
})
