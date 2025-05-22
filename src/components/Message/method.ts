import type { CreateMessageProps, MessageContext } from './types';
import { render, h, shallowReactive } from 'vue';
import MessageConstructor from './Message.vue';
import useZindex from '@/hooks/useZindex';

let seed = 1
const instances: MessageContext[] = shallowReactive([])//shallowReactive优化性能，数组增删改变才更新视图
export const createMessage = (props: CreateMessageProps) => {
    const {nextZIndex}=useZindex()
    const id = `message_${seed++}`
    const container = document.createElement('div')
    const manualDestroy=()=>{
        const instance=instances.find(instance=>instance.id===id)
        if(instance){
            instance.vm.exposed!.visible.value=false
        }
    }
    const destroy = () => {
        //清空消失的message组件
        const idx = instances.findIndex(instance => instance.id === id)
        if (idx === -1) {
            return
        }
        instances.splice(idx, 1)
        render(null, container)
    }
    const newProps = {
        ...props,
        id,
        zIndex:nextZIndex(),
        onDestroy: destroy
    }
    const vnode = h(MessageConstructor, newProps)
    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
    //ts中添加感叹号表示变量不为null、undefined。非空断言操作符。
    const vm = vnode.component!
    const instance: MessageContext = {
        id,
        vnode,
        vm,
        props: newProps,
        destroy:manualDestroy
    }
    instances.push(instance)
    return instance
}
export const getLastInstance = () => {
    return instances.at(-1)
    //拿到数组最后一项
}
export const getLastBottomOffset = (id: string) => {
    const idx = instances.findIndex(instances => instances.id === id)
    console.log('idx',id,idx,instances.length)
    if (idx <= 0) {
        return 0
    } else {
        const prev = instances[idx - 1]
        console.log('prev',prev.vm)
        return prev.vm.exposed!.bottomOffset.value
    }

}
