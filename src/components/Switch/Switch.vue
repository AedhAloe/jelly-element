<template>
    <div class="sg-switch" :class="{
        [`sg-switch--${size}`]: size,
        'is-checked': checked,
        'is-disabled': disabled,
    }"
        @click="switchValue"
        >
        <input class="sg-switch__input" 
        type="checkbox" role="switch" 
        :name="name" :disabled="disabled"
        ref="input"
        @keydown.enter="switchValue">
    <div class="sg-switch__core" >
        <div class="sg-switch__core-inner">
            <span v-if="activeText||inactiveText" class="sg-switch__core-inner-text">
                {{ checked ? activeText : inactiveText }}
            </span>
        </div>
        <div class="sg-switch__core-action"></div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed,onMounted, watch } from 'vue';
import type { SwitchProps, SwitchEmits } from './types'
import './style.css'

defineOptions({
    name: 'SGSwitch',
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SwitchProps>(),{
    activeValue: true,
    inactiveValue: false,}
)
const emit = defineEmits<SwitchEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()
const checked = computed(() => innerValue.value === props.activeValue)
const switchValue=()=>{
    if(props.disabled) return
    const newValue = checked.value ? props.inactiveValue : props.activeValue
    innerValue.value = newValue 
    emit('update:modelValue', newValue)
    emit('change', newValue)
}
onMounted(()=>{
    input.value!.checked = checked.value
})
watch(checked,(val)=>{
    input.value!.checked = val
})
watch(()=>props.modelValue,(newValue)=>{
    innerValue.value = newValue
})
</script>
