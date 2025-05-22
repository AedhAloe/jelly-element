<template>
    <Transition :name="transitionName" @afterLeave="destroyComponent" @enter="updateHeight">
    <div class="sg-message" v-show="visible" role="alert" ref="messageRef" :style="cssStyle" @mouseenter="clearTimer"
        @mouseleave="startTimer" :class="{
            [`sg-message--${type}`]: type,
            'is-close': showClose,
        }">
        <div class="sg-message__content">
            <slot>
                <RenderVnode :vNode="message" v-if="message" />
            </slot>
        </div>
        <div class="sg-message__close" v-if="showClose" @click.stop="visible = false">
            <Icon icon="xmark" />
        </div>
    </div>
</Transition>
</template>

<script setup lang="ts">
import type { MessageProps } from './types';
import { ref, onMounted, watch, computed, nextTick, getCurrentInstance } from 'vue';
import RenderVnode from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { getLastBottomOffset, getLastInstance } from './method';
import useEventListener from '@/hooks/useEventListener';
const props = withDefaults(defineProps<MessageProps>(), {
    duration: 3000,
    showClose: true,
    type: 'info',
    offset: 20,
    transitionName:'fade-up',
    onDestroy: () => {}
})
let timer:any
function startTimer() {
    clearTimer()
    if (props.duration === 0) {
        return
    }
    timer = setTimeout(() => {
        visible.value = false
    }, props.duration)
}
function clearTimer() {
    clearTimeout(timer)
}
const visible = ref(false)
const messageRef = ref<HTMLDivElement>()

//计算偏移高度
const height = ref(0)//div的高度
const lastOffset = computed(() => getLastBottomOffset(props.id))//上个message的底边
const topOffset = computed(() => props.offset + lastOffset.value)//这个message的顶边
const bottomOffset = computed(() => height.value + topOffset.value)//这个元素的底边
const cssStyle = computed(() => {
    return {
        top: `${topOffset.value}px`,
        zIndex: props.zIndex
    }
})
onMounted(async () => {
    visible.value = true
    startTimer()  
})
function keydown(e: Event) {
    const event = e as KeyboardEvent
    if (event.code === 'Escape') {
        visible.value = false
    }
}
useEventListener(document, 'keydown', keydown)
function destroyComponent(){
    props.onDestroy()
}
function updateHeight(){
    height.value = messageRef.value!.getBoundingClientRect().height || 0;
}
defineExpose({
    bottomOffset,
    visible
})
</script>
