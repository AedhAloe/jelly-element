<template>
    <div class="sg-input" :class="{
        [`sg-input--${type}`]: type,
        [`sg-input--${size}`]: size,
        'is-disabled': disabled,
        'is-prepend': $slots.prepend,
        'is-append': $slots.append,
        'is-prefix': $slots.prefix,
        'is-suffix': $slots.suffix,
        'is-focus': isFocus
    }">
        <!-- input -->
        <template v-if="type != 'textarea'">
            <div v-if="$slots.prepend" class="sg-input__prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="sg-input__wrapper">
                <span v-if="$slots.prefix" class="sg-input__prefix">
                    <slot name="prefix"></slot>
                </span>
                <input class="sg-input__inner" :type="showPassword ? (pwdVisible ? 'text' : 'password') : type"
                    :disabled="disabled" v-model="innerValue" @input="handleInput" @focus="handleFocus"
                    @blur="handleBlur" @change="handleChange" :readonly="readonly" :autocomplete="autocomplete"
                    :placeholder="placeholder" :autofocus="autofocus" :form="form" v-bind="attrs" ref="inputRef">
                <span v-if="$slots.suffix || showClear || showPasswordArea" class="sg-input__suffix">
                    <slot name="suffix"></slot>
                    <Icon icon="circle-xmark" v-if="showClear" class="sg-input__clear" @click.stop="clear"></Icon>
                    <Icon :icon="pwdVisible ? 'eye' : 'eye-slash'" v-if="showPasswordArea" class="sg-input__password"
                        @click="togglePasswordVisible"></Icon>
                </span>
            </div>
            <div v-if="$slots.append" class="sg-input_append">
                <slot name="append"></slot>
            </div>
        </template>
        <!-- textarea -->
        <template v-else>
            <textarea class="sg-textarea__wrapper" :disabled="disabled" v-model="innerValue" @input="handleInput"
                @focus="handleFocus" @blur="handleBlur" @change="handleChange" :readonly="readonly"
                :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus" :form="form"
                v-bind="attrs" ref="inputRef"></textarea>
        </template>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, computed, useAttrs } from 'vue';
import type { InputProps, InputEmits } from './types';
import Icon from '../Icon/Icon.vue';
import type { RefSymbol } from '@vue/reactivity';
import type { Ref } from '@vue/reactivity';

defineOptions({
    name: 'SGInput',
    inheritAttrs: false
})
const isFocus = ref(false)
const pwdVisible = ref(false)
const inputRef = ref() as Ref<HTMLInputElement>
const props = withDefaults(defineProps<InputProps>(), { type: 'text', autocomplete: 'off' })
const innerValue = ref(props.modelValue)
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()
const showPasswordArea = computed(() => {
    return props.showPassword && !props.disabled && !!innerValue.value
})
const togglePasswordVisible = () => {
    pwdVisible.value = !pwdVisible.value
}
const showClear = computed(() => {
    return props.clearable && !props.disabled && !!innerValue.value && (isFocus.value || innerValue.value)
})
const handleFocus = (event: FocusEvent) => {
    isFocus.value = true
    emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
    setTimeout(() => {
        isFocus.value = false
        emits('blur', event)
    }, 100)
}
const clear = () => {
    innerValue.value = ''
    emits('update:modelValue', '')
    emits('clear')
    emits('input', '')
    emits('change', '')
    inputRef.value?.focus()
}
const handleInput = () => {
    emits('update:modelValue', innerValue.value)
    emits('input', innerValue.value)
}
const handleChange = () => {
    emits('change', innerValue.value)
}
watch(() => props.modelValue, (newValue) => {
    innerValue.value = newValue
})
defineExpose({
    ref:inputRef
})
</script>