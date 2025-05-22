<template>
    <div class="sg-tooltip" ref="popperContainerNode" v-on="outerEvents">
        <div class="sg-tooltip__trigger" ref="triggerNode" v-on="events">
            <slot />
        </div>
        <Transition :name="transition">
            <div v-if="isOpen" class="sg-tooltip__popper" ref="popperNode">
                <slot name="content">
                    {{ content }}
                </slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import { createPopper, type Instance } from '@popperjs/core'
import { ref, watch, reactive, onMounted, onUnmounted, computed } from 'vue'
import useClickOutside from '../../hooks/useClickOutside.ts'
import { debounce } from 'lodash-es'
const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    openDelay:0,
    closeDelay:0,
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()  
let popperInstance: null | Instance = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
const popperOptions = computed(() => {
    return {
        placement: props.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8]
                }
            }
        ],
        ...props.popperOptions
    }
})
const open = () => {
    setTimeout(()=>{
        isOpen.value = true
        emits('visible-change', true)
    },props.closeDelay)
}
const close = () => {
    setTimeout(()=>{
        isOpen.value = false
        emits('visible-change', false)
    },props.closeDelay)
}
const openDebounce=debounce(open,props.openDelay)
const closeDebounce=debounce(close,props.closeDelay)

const openFinal=()=>{
    closeDebounce.cancel()
    openDebounce()
}
const closeFinal=()=>{
    openDebounce.cancel()
    closeDebounce()
}

const togglePopper = () => {
if(isOpen.value){
    closeFinal()
}else{
    openFinal()
}
}

useClickOutside(popperContainerNode, () => {
    if (props.trigger === 'click' && isOpen.value && !props.manual) {
        closeFinal()
    }
})
const attachEvents = () => {
    if (props.trigger === 'hover') {
        events['mouseenter'] = openFinal
        outerEvents['mouseleave'] = closeFinal
    } else if (props.trigger === 'click') {
        events['click'] = togglePopper
    }
}
if (!props.manual) { attachEvents() }
watch(() => props.manual, (isManual) => {
    if (isManual) {
        events = {}
        outerEvents = {}
    } else {
        attachEvents()
    }
})
watch(() => props.trigger, (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
        events = {}
        outerEvents = {}
        attachEvents()
    }
})
watch(isOpen, (newValue) => {
    if (newValue) {
        if (triggerNode.value && popperNode.value) {
            popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
        } else {
            popperInstance?.destroy()
        }
    }
}, { flush: 'post' })
onUnmounted(() => {
    popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
    'show': openFinal,
    'hide': closeFinal
})
</script>
