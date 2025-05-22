<template>
    <div class="sg-dropdown">
        <Tooltip :trigger="trigger" 
        :placement="placement" 
        :popper-options="popperOptions" 
        :open-delay="openDelay"
        :close-delay="closeDelay" 
        @visible-change="visibleChange" 
        ref="tooltipRef">
            <slot />
            <template #content>
                <ul class="sg-dropdown__menu">
                    <template v-for="item in menuOptions" :key="item.key">
                         <li
                         v-if="item.divided"
                         role="separator"
                         class="divided-placeholder"
                         ></li>
                         <li
                         class="sg-dropdown__item"
                         @click="itemClick(item)"
                         :class="{'is-disabled': item.disabled,'is-divider': item.divided}"
                         :id="`dropdown-item-${item.key}`"
                         >
                            <RenderVnode :v-node="item.label" />
                         </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';  
import type { Ref } from 'vue' 
import type { DropdownProps, DropdownEmits, DropdownInstance, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue';
import type { TooltipInstance } from '../Tooltip/types';
import RenderVnode from '../Common/RenderVnode.ts';
const props = withDefaults(defineProps<DropdownProps>(),{hideAfterClick:true})
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<InstanceType<typeof Tooltip>>()
const visibleChange = (e: boolean) => {
    emits('visible-change', e)
}
const itemClick=(e:MenuOption)=>{
    if(e.disabled){
        return
    }
    emits('select',e)
    if(props.hideAfterClick){
        tooltipRef.value?.hide()
    }
}
defineExpose<DropdownInstance>({
    show: tooltipRef.value?.show || (() => {}),
    hide: tooltipRef.value?.hide || (() => {}),
})
</script>
