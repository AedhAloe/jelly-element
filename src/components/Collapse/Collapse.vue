<template>
    <div class="sg-collapse">
        <slot />
    </div>
</template>

<script setup lang="ts">
import {ref,provide,watch} from 'vue'
import type {NameType,CollapseProps,CollapseEmits} from './types'
import { CollapseContextKey } from './types'

defineOptions({
    name: "SGCollapse"
})
const props=defineProps<CollapseProps>()
const emits=defineEmits<CollapseEmits>()

const activeNames =ref<NameType[]>(props.modelValue)
watch(()=>props.modelValue,()=>{
    activeNames.value=props.modelValue
})
if(props.accordion && activeNames.value.length>1){
    console.warn('accordion mode should only have one acitve item')
}

const handleItemClick=(item: NameType)=>{
    let _activeNames=[...activeNames.value]
    if(props.accordion){
        //手风琴模式，只允许一个面板展开
        _activeNames=[_activeNames[0]===item?'':item]
        activeNames.value=_activeNames
    }else{
        //普通模式，可以同时展开多个面板
    const index = _activeNames.indexOf(item)
    if(index>-1){
        _activeNames.splice(index,1)
    } else{
        _activeNames.push(item)
    }
    activeNames.value=_activeNames
}
    emits('update:modelValue',_activeNames)
    emits('change',_activeNames)
}
provide(CollapseContextKey,{
    activeNames,
    handleItemClick
})
</script>